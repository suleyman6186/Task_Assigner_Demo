using TaskAssignerApp.Server.Models;

namespace TaskAssignerApp.Server.Services
{
    public class ProcessService
    {
        private static readonly List<Process> Processes = new List<Process>
        {
            new Process() { Name = "MARKING", Difficulty = 1 },
            new Process() { Name = "POLISHING", Difficulty = 2 },
            new Process() { Name = "PIPE BENDING", Difficulty = 3 },
            new Process() { Name = "CUTTING", Difficulty = 4 },
            new Process() { Name = "FORMING", Difficulty = 5 },
            new Process() { Name = "HAND WELDING", Difficulty = 6 }
        };

        public List<Process> GetProcesses()
        {
            return Processes;
        }
    }
}