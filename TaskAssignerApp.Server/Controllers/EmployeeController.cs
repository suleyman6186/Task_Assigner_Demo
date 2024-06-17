using Microsoft.AspNetCore.Mvc;
using TaskAssignerApp.Server.Models;
using TaskAssignerApp.Server.Services;

namespace TaskAssignerApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeService _employeeService;

        public EmployeeController(EmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public ActionResult<List<Employee>> GetEmployees()
        {
            return _employeeService.GetEmployees();
        }
    }
}