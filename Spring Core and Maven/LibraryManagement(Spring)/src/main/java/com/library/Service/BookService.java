package com.library.Service;
import com.library.Repository.BookRepository;


public class BookService {

    private BookRepository repository;

    public BookService(BookRepository repository) {
        this.repository = repository;
    }
    
//    public void setRepository(BookRepository repository) {
//        this.repository = repository;
//    }

    public void issueBook() {
        System.out.println("Book Service is running...");
        System.out.println("Book Service is calling Repository to issueBook");
        repository.displayBooks();
    }
}