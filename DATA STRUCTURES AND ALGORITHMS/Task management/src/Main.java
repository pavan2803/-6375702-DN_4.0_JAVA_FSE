public class Main {
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();

        manager.addTask(new Task(1, "Design UI", "Pending"));
        manager.addTask(new Task(2, "Develop Backend", "In Progress"));
        manager.addTask(new Task(3, "Write Tests", "Pending"));

        System.out.println("\nAll Tasks:");
        manager.traverseTasks();

        System.out.println("\nSearching Task with ID 2:");
        Task found = manager.searchTask(2);
        System.out.println(found != null ? found : "Task not found.");

        System.out.println("\nDeleting Task with ID 1:");
        manager.deleteTask(1);

        System.out.println("\nAll Tasks After Deletion:");
        manager.traverseTasks();
    }
}
