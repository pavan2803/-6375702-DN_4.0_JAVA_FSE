import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Book[] books = {
            new Book(1, "The Alchemist", "Paulo Coelho"),
            new Book(2, "1984", "George Orwell"),
            new Book(3, "To Kill a Mockingbird", "Harper Lee"),
            new Book(4, "Brave New World", "Aldous Huxley")
        };

        Arrays.sort(books, (a, b) -> a.title.compareToIgnoreCase(b.title));

        String searchTitle = "1984";

        Book result1 = LibrarySearch.linearSearchByTitle(books, searchTitle);
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        Book result2 = LibrarySearch.binarySearchByTitle(books, searchTitle);
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
