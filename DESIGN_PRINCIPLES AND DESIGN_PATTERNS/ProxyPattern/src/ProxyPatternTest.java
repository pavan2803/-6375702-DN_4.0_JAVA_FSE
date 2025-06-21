public class ProxyPatternTest {
    public static void main(String[] args) {
        Image image1 = new ProxyImage("photo1.jpg");
        Image image2 = new ProxyImage("photo2.jpg");

        System.out.println("First time loading image1:");
        image1.display();  

        System.out.println("\nSecond time loading image1:");
        image1.display(); 

        System.out.println("\nFirst time loading image2:");
        image2.display();  
    }
}
