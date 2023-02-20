package com.luv2code.reactspringbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luv2code.reactspringbootlibrary.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    
}
