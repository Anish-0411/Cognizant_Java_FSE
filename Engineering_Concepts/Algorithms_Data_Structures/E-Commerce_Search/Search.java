package Engineering_Concepts.Algorithms_Data_Structures;
import java.util.ArrayList;
import java.util.Arrays;

public class Search{
        public void LinearSearch(String name, ArrayList<Product>unsortedProducts){
            boolean found = false;
            for(Product i : unsortedProducts){
                if(i.productName==name){
                    found = true;
                    System.out.println(i.productName + " is found using Linear Search");
                    System.out.println("Name: "+i.productId);
                    System.out.println("Name: "+i.productName);
                    System.out.println("Name: "+i.quantity);
                    System.out.println("Name: "+i.price);
                    break;
                }
            }
            if(!found){
                System.out.println("Item NOT found");
            }
        }

        public void BinarySearch(int id, ArrayList<Product>sortedProducts){
            int n = sortedProducts.size();
            int l=0,h=n-1;
            boolean found = false;
            while(l<=h){
                int mid = l+(h-l)/2;
                if(sortedProducts.get(mid).productId==id){
                    found = true;
                    System.out.println(sortedProducts.get(mid).productName + " is found using Binary Search");
                    System.out.println("Name: "+sortedProducts.get(mid).productId);
                    System.out.println("Name: "+sortedProducts.get(mid).productName);
                    System.out.println("Name: "+ sortedProducts.get(mid).quantity);
                    System.out.println("Name: "+sortedProducts.get(mid).price);
                    break;
                }
                else if(sortedProducts.get(mid).productId>id){
                    h = mid-1;
                }
                else{
                    l = mid+1;
                }
            }
            if(!found){
                System.out.println("Item NOT found");
            }
        }

    public static void main(String[] args) {
        ArrayList<Product> sortedProducts = new ArrayList<>(Arrays.asList(
            new Product(101, "Laptop", 8, 55000),
            new Product(102, "Headphones", 20, 1800),
            new Product(103, "Monitor", 12, 9000),
            new Product(104, "Speaker", 10, 3200),
            new Product(105, "Keyboard", 15, 1200),
            new Product(106, "Router", 14, 2800),
            new Product(107, "Printer", 5, 7500),
            new Product(108, "SSD", 25, 4500),
            new Product(109, "Mouse", 30, 600),
            new Product(110, "Webcam", 18, 2500)
        ));
        ArrayList<Product> unsortedProducts = new ArrayList<>(Arrays.asList(
            new Product(105, "Keyboard", 15, 1200),
            new Product(101, "Laptop", 8, 55000),
            new Product(109, "Mouse", 30, 600),
            new Product(103, "Monitor", 12, 9000),
            new Product(107, "Printer", 5, 7500),
            new Product(102, "Headphones", 20, 1800),
            new Product(110, "Webcam", 18, 2500),
            new Product(104, "Speaker", 10, 3200),
            new Product(108, "SSD", 25, 4500),
            new Product(106, "Router", 14, 2800)
        ));
        
        Search ls = new Search();
        ls.LinearSearch("Monitor",unsortedProducts);
        Search bs = new Search();
        bs.BinarySearch(108, sortedProducts);
        Search b = new Search();
        b.BinarySearch(989, sortedProducts);

    }
}

