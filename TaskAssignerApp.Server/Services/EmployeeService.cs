using System.Collections.Generic;
using TaskAssignerApp.Server.Models;

namespace TaskAssignerApp.Server.Services
{
    public class EmployeeService
    {
        private static readonly List<Employee> Employees = new List<Employee>
        {
            new Employee() { Name = "SÜLEYMAN", Surname = "İBRAHİMBAŞ" },
            new Employee() { Name = "OSMAN", Surname = "İBRAHİMBAŞ" },
            new Employee() { Name = "MUSTAFA", Surname = "İBRAHİMBAŞ" },
            new Employee() { Name = "LÜTFİYE", Surname = "İBRAHİMBAŞ" },
            new Employee() { Name = "AZRA", Surname = "İBRAHİMBAŞ" },
            new Employee() { Name = "NEJLA", Surname = "İBRAHİMBAŞ" }
        };

        public List<Employee> GetEmployees()
        {
            return Employees;
        }
    }
}