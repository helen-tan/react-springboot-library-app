package com.luv2code.reactspringbootlibrary.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import com.luv2code.reactspringbootlibrary.entity.Book;

// Once the repository extends JpaRepository (Spring data JPA), REST API endpoints will automagically be generated/exposed under the hood
public interface BookRepository extends JpaRepository<Book, Long>{
    
    Page<Book> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);

    Page<Book> findByCategory(@RequestParam("category") String category, Pageable pageable);
}
