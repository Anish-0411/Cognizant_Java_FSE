package SingletonPatternExample;
public class Logger {
    private static Logger logger;

    private Logger(){
        System.out.println("Logger Instance is Created");
    }
    public static Logger getInstance(){
        if(logger==null){
            logger = new Logger();
        }
        return logger;
    }

    void log(String message){
        System.out.println("Log:" + message);
    }
}

