package FactoryMethodPatternExample;

public class WordDocumentFactory extends DocumentFactory{
        @Override
        public Document createDocument(){
            System.out.println("Word Document is created");
            return new WordDocument();
        }
}
