namespace TaskAssignerApp.Server.Models
{
    public class TaskAssignment
    {
        public string EmployeeName { get; set; }
        public string EmployeeSurname { get; set; }
        public string ProcessName { get; set; }
        public int ProcessDifficulty { get; set; }
        public string Day { get; set; }
    }
}