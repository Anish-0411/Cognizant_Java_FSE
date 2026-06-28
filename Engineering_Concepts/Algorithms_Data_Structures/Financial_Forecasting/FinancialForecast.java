package Engineering_Concepts.Algorithms_Data_Structures.Financial_Forecasting;

public class FinancialForecast {
    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return predictFutureValue(currentValue, growthRate, years - 1) * (1 + growthRate / 100);
    }

    public static void main(String[] args) {
        double currentValue = 10000;
        double growthRate = 8;
        int years = 5;

        double futureValue = predictFutureValue(currentValue, growthRate, years);

        System.out.printf("Predicted Future Value after %d years: %.2f%n",years, futureValue);
    }
}