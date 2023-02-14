package com.luv2code.reactspringbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.luv2code.reactspringbootlibrary.entity.Book;

// Once the repository extends JpaRepository (Spring data JPA), REST API endpoints will automagically be generated/exposed under the hood
public interface BookRepository extends JpaRepository<Book, Long>{
    
}
