package FactoryMethodPatternExample;

public class PdfDocument implements Document{
    @Override
    public void printDocument(){
        System.out.println("This is Pdf Document");
    };
}