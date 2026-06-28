package Engineering_Concepts.Algorithms_Data_Structures.E_Commerce_Search;

public class Product {
    public int productId;
    public String productName;
    public int quantity;
    public int price;

    Product(int productId,String productName, int quantity, int price){
        this.productId=productId;
        this.productName=productName;
        this.quantity=quantity;
        this.price=price;
    }
}
