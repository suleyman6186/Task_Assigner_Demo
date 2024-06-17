using Microsoft.AspNetCore.Mvc;
using TaskAssignerApp.Server.Models;
using TaskAssignerApp.Server.Services;

namespace TaskAssignerApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProcessController : ControllerBase
    {
        private readonly ProcessService _processService;

        public ProcessController(ProcessService processService)
        {
            _processService = processService;
        }

        [HttpGet]
        public ActionResult<List<Process>> GetProcesses()
        {
            return _processService.GetProcesses();
        }
    }
}