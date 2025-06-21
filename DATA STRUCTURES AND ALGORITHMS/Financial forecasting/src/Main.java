public class Main {
    public static void main(String[] args) {
        double presentValue = 1000; 
        double growthRate = 0.10;   
        int years = 5;

        double result = Forecasting.futureValue(presentValue, growthRate, years);
        System.out.printf("Future Value (Recursive): ₹%.2f%n", result);

        double[] memo = new double[years + 1];
        double optimizedResult = Forecasting.futureValueMemo(presentValue, growthRate, years, memo);
        System.out.printf("Future Value (Memoized): ₹%.2f%n", optimizedResult);
    }
}
