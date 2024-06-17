import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// TaskAssignment arayüzü: Bir görev atamasını temsil eder
export interface TaskAssignment {
  employeeName: string; // Çalışanın ismi
  employeeSurname: string; // Çalışanın soyismi
  processName: string; // İşlem adı
  processDifficulty: number; // İşlem zorluk derecesi
  day: string; // Gün
}

// Employee arayüzü: Bir çalışanı temsil eder
export interface Employee {
  name: string; // Çalışanın ismi
  surname: string; // Çalışanın soyismi
}

// @Injectable decorator: Bu sınıfın DI (Dependency Injection) ile sağlanacağını belirtir
@Injectable({
  providedIn: 'root' // Servisin kök enjeksiyon sağlayıcısında sağlanacağını belirtir
})
export class TaskService {
  // API endpoint URL'leri
  private taskAssignmentUrl = 'https://localhost:7074/api/TaskAssignment'; // Görev atamaları için URL
  private employeeUrl = 'https://localhost:7074/api/Employee'; // Çalışanlar için URL
  private dayUrl = 'https://localhost:7074/api/WorkingDay'; // Günler için URL

  // Constructor: HttpClient'i dependency injection ile alır
  constructor(private http: HttpClient) { }

  // Görev atamalarını getiren fonksiyon
  getTaskAssignments(): Observable<TaskAssignment[]> {
    // HTTP GET isteği yapar ve TaskAssignment türünde bir Observable döner
    return this.http.get<TaskAssignment[]>(this.taskAssignmentUrl);
  }

  // Çalışanları getiren fonksiyon
  getEmployees(): Observable<Employee[]> {
    // HTTP GET isteği yapar ve Employee türünde bir Observable döner
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  // Günleri getiren fonksiyon
  getDays(): Observable<string[]> {
    // HTTP GET isteği yapar ve string türünde bir Observable döner
    return this.http.get<string[]>(this.dayUrl);
  }
}
