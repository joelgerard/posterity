
public class Population {

    // These lists represent totals in 10k increments. For example,
    // population[0] = number of people in the 0-10k total wealth, population[1] = 10-20k total wealth.
    private ListArray<double> wealth;
    private ListArray<long> population;

    private float birthRate;

    private int year = 1416;

    public int getYear() {
        return year;
    }

    public void inc() {
        this.year++;

    }

}