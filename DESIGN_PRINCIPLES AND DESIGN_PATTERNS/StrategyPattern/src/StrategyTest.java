public class StrategyTest {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        context.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
        context.payAmount(250.75);
        context.setPaymentStrategy(new PayPalPayment("user@example.com"));
        context.payAmount(99.99);
    }
}
