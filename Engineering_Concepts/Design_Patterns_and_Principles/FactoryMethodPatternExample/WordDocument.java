package FactoryMethodPatternExample;

public class WordDocument implements Document{
    @Override
    public void printDocument(){
        System.out.println("This is Word Document");
    };
}