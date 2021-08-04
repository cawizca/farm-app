package com.kavishka.backend.repository;

import com.kavishka.backend.domain.Cart;
import com.kavishka.backend.domain.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> {
}
