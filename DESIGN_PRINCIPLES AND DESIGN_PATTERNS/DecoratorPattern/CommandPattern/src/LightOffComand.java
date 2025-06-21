public class LightOffComand implements Command {
    private Light light;

    public LightOffComand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOff();
    }
}
