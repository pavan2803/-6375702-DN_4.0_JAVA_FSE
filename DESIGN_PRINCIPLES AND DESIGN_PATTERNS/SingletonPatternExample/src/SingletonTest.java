public class SingletonTest {
    public static void main(String[] args) {
        logger logger1 = logger.getInstance();
        logger1.log("This is the first log message.");

        logger logger2 = logger.getInstance();
        logger2.log("This is the second log message.");

        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same. Singleton works!");
        } else {
            System.out.println("Different logger instances. Singleton failed!");
        }
    }
}
