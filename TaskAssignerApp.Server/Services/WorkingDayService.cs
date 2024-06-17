namespace TaskAssignerApp.Server.Services
{
    public class WorkingDayService
    {
        private static readonly List<string> Days = new List<string>
        {
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        };

        public List<string> GetDays()
        {
            return Days;
        }
    }
}