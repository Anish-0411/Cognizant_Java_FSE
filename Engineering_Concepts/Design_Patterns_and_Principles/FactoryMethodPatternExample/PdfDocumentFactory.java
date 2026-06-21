package FactoryMethodPatternExample;

public class PdfDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument() {
        System.out.println("Pdf Document is created");
        return new PdfDocument();
    }
}
