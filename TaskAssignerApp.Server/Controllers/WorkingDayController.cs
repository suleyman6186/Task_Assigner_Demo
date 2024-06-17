using Microsoft.AspNetCore.Mvc;
using TaskAssignerApp.Server.Services;

namespace TaskAssignerApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkingDayController : ControllerBase
    {
        private readonly WorkingDayService _workingDayService;

        public WorkingDayController(WorkingDayService workingDayService)
        {
            _workingDayService = workingDayService;
        }

        [HttpGet]
        public ActionResult<List<string>> GetDays()
        {
            return _workingDayService.GetDays();
        }
    }
}