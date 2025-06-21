public class ObserverTest {
    public static void main(String[] args) {
        StockMarket stockMarket = new StockMarket();

        Observer mobileApp = new MobileApp("InvestorX");
        Observer webApp = new WebApp("MarketWatch");

        stockMarket.registerObserver(mobileApp);
        stockMarket.registerObserver(webApp);

        stockMarket.setStockPrice(101.25);
        stockMarket.setStockPrice(107.80);

        stockMarket.removeObserver(webApp);
        stockMarket.setStockPrice(110.00);
    }
}
