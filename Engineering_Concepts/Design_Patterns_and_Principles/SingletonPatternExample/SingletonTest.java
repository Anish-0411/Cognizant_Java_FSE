package SingletonPatternExample;
public class SingletonTest{
    public static void main(String []args){
        Logger L1 = Logger.getInstance();
        Logger L2 = Logger.getInstance();
        
        L1.log("Application started");
        L2.log("User logged in succesfully");

        if(L1==L2){
            System.out.println("Same logger instance is accessed");
        }
        else{
            System.out.println("Different logger instance is accessed");
        }

    }
} 