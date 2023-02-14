package com.luv2code.reactspringbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.luv2code.reactspringbootlibrary.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{
    
}
