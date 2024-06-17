using Microsoft.AspNetCore.Mvc;
using TaskAssignerApp.Server.Models;
using TaskAssignerApp.Server.Services;

namespace TaskAssignerApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskAssignmentController : ControllerBase
    {
        // Bağımlılıkları DI yoluyla alıyoruz
        private readonly EmployeeService _employeeService;
        private readonly ProcessService _processService;
        private readonly WorkingDayService _workingDayService;

        // Bağımlılıkların Constructor aracılığıyla verilmesi
        public TaskAssignmentController(EmployeeService employeeService, ProcessService processService, WorkingDayService workingDayService)
        {
            _employeeService = employeeService;
            _processService = processService;
            _workingDayService = workingDayService;
        }

        // Görev atamalarını almak için bir HTTP GET endpoint'i
        [HttpGet]
        public ActionResult<List<TaskAssignment>> GetTaskAssignments()
        {
            // Servislerden verilerin alınması
            var employees = _employeeService.GetEmployees();
            var processes = _processService.GetProcesses();
            var days = _workingDayService.GetDays();

            var random = new Random();
            var taskAssignments = new List<TaskAssignment>();

            // Çalışanların geçmişteki görevlerini takip etmek için bir dictionary oluşturulur
            var employeeTaskHistory = employees.ToDictionary(e => e.Name, e => new HashSet<string>());

            // Her gün için görev atamaları yapılır
            foreach (var day in days)
            {
                // Her gün için görevleri ve çalışanları karıştırın
                var availableEmployees = new List<Employee>(employees);
                var availableProcesses = new List<Process>(processes);

                // Görevlerin rastgele sırayla çalışanlara ataması yapılır
                foreach (var process in availableProcesses.OrderBy(p => random.Next()).ToList())
                {
                    // Bu görevi daha önce almamış çalışanları filtreler
                    var eligibleEmployees = availableEmployees.Where(e => !employeeTaskHistory[e.Name].Contains(process.Name)).ToList();

                    // Eğer hiç uygun çalışan yoksa, tüm çalışanların görev geçmişi temizlenir ve tekrar atama yapar
                    if (eligibleEmployees.Count == 0)
                    {
                        foreach (var item in employees)
                        {
                            employeeTaskHistory[item.Name].Clear();
                        }
                        eligibleEmployees = new List<Employee>(availableEmployees);
                    }

                    // Rastgele bir uygun çalışan seçilir
                    var employee = eligibleEmployees[random.Next(eligibleEmployees.Count)];

                    // Görev ataması oluşturulur
                    taskAssignments.Add(new TaskAssignment
                    {
                        EmployeeName = employee.Name,
                        EmployeeSurname = employee.Surname,
                        ProcessName = process.Name,
                        ProcessDifficulty = process.Difficulty,
                        Day = day
                    });

                    // Çalışanın görev geçmişine bu görevi ekler
                    employeeTaskHistory[employee.Name].Add(process.Name);
                    // Çalışanı mevcut listeden çıkarır, böylece aynı gün içinde başka görev almasını engeller
                    availableEmployees.Remove(employee);
                }
            }

            // Görev atama listesini geri döndürür
            return taskAssignments;
        }
    }
}