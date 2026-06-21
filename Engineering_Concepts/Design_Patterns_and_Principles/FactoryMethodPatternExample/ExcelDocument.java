package FactoryMethodPatternExample;

public class ExcelDocument implements Document{
    @Override
    public void printDocument(){
        System.out.println("This is Excel Document");
    };
}