import java.util.Scanner;

public class TestFactoryPattern {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Choose document type (word/pdf/excel): ");
        String docType = scanner.nextLine().trim().toLowerCase();

        DocumentFactory factory;

        switch (docType) {
            case "word":
                factory = new WordFactory();
                break;
            case "pdf":
                factory = new PdfFactory();
                break;
            case "excel":
                factory = new ExcelFactory();
                break;
            default:
                System.out.println("Invalid document type.");
                scanner.close();
                return;
        }

        Document document = factory.createDocument();
        document.open();

        scanner.close();
    }
}
