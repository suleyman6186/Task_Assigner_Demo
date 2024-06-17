import { Component, OnInit } from '@angular/core';
import { TaskService, TaskAssignment, Employee } from './task.service';

// Component decorator'u: Angular'a bu sınıfın bir component olduğunu ve ilgili metadata'yı belirtir
@Component({
  selector: 'app-task-list', // Bu component'in HTML etiketinde kullanıldığı isim
  templateUrl: './task-list.component.html', // Bu component'in şablon dosyasının yolu
  styleUrls: ['./task-list.component.css'] // Bu component'in stil dosyasının yolu
})
export class TaskListComponent implements OnInit {
  taskAssignments: TaskAssignment[] = []; // Görev atamalarını tutan dizi
  tasksByDayAndEmployee: { [day: string]: { [employeeName: string]: TaskAssignment | null } } = {}; // Gün ve çalışana göre gruplanmış görevler
  displayedColumns: string[] = ['day']; // Tablo sütunlarını tutan dizi
  employees: string[] = []; // Çalışan isimlerini tutan dizi
  days: string[] = []; // Günleri tutan dizi
  employeeDifficulties: { [employeeName: string]: number } = {}; // Çalışanların toplam zorluk derecelerini tutan nesne

  // Constructor: TaskService'i dependency injection ile alır
  constructor(private taskService: TaskService) { }

  // Angular'ın lifecycle hook'u: Component ilk yüklendiğinde çalışır
  ngOnInit(): void {
    this.loadDays(); // Günleri yükler
  }

  // Günleri yükleyen fonksiyon
  loadDays(): void {
    this.taskService.getDays().subscribe(days => {
      this.days = days; // Günleri alır ve 'days' değişkenine atar
      this.loadEmployees(); // Çalışanları yükler
    });
  }

  // Çalışanları yükleyen fonksiyon
  loadEmployees(): void {
    this.taskService.getEmployees().subscribe(employees => {
      this.employees = employees.map(e => e.name); // Çalışan isimlerini 'employees' değişkenine atar
      this.displayedColumns = ['day', ...this.employees]; // Tablo sütunlarını günceller
      this.loadTaskAssignments(); // Görev atamalarını yükler
    });
  }

  // Görev atamalarını yükleyen fonksiyon
  loadTaskAssignments(): void {
    this.taskService.getTaskAssignments().subscribe(data => {
      this.taskAssignments = data; // Görev atamalarını 'taskAssignments' değişkenine atar
      this.groupTasksByDayAndEmployee(); // Görevleri gün ve çalışana göre gruplar
      this.calculateEmployeeDifficulties(); // Çalışanların toplam zorluk derecelerini hesaplar
    });
  }

  // Görevleri yeniden atayan fonksiyon
  assignTasks(): void {
    this.loadTaskAssignments(); // Görev atamalarını yeniden yükler
  }

  // Görevleri gün ve çalışana göre gruplandıran fonksiyon
  groupTasksByDayAndEmployee(): void {
    this.tasksByDayAndEmployee = {}; // Nesneyi sıfırlar

    this.days.forEach(day => {
      this.tasksByDayAndEmployee[day] = {}; // Her gün için bir nesne oluşturur
      this.employees.forEach(employee => {
        // Her çalışan için ilgili gün ve çalışanın görevini bulur ve nesneye ekler
        this.tasksByDayAndEmployee[day][employee] = this.taskAssignments.find(
          task => task.day === day && task.employeeName === employee
        ) || null; // Görev bulunamazsa 'null' atar
      });
    });
  }

  // Çalışanların toplam zorluk derecelerini hesaplayan fonksiyon
  calculateEmployeeDifficulties(): void {
    this.employeeDifficulties = {}; // Nesneyi sıfırlar

    this.employees.forEach(employee => {
      // Her çalışan için görevlerini filtreler ve toplam zorluk derecesini hesaplar
      this.employeeDifficulties[employee] = this.taskAssignments
        .filter(task => task.employeeName === employee)
        .reduce((total, task) => total + task.processDifficulty, 0); // Zorluk derecelerini toplar
    });
  }
}
