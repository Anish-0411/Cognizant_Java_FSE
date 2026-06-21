package FactoryMethodPatternExample;

public class ExcelDocumentFactory extends DocumentFactory{
        @Override
        public Document createDocument(){
            System.out.println("Excel Document is created");
            return new ExcelDocument();
        }
}

