package com.kavishka.backend.controller;

import com.kavishka.backend.domain.Cart;
import com.kavishka.backend.domain.Product;
import com.kavishka.backend.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @GetMapping("/")
    public List<Cart> getAllProducts(){
        return cartRepository.findAll();
    }

    @GetMapping("/count")
    public long getAllProductsCount(){
        return cartRepository.count();
    }

    @PostMapping("/")
    public Cart addProductToCart(@RequestBody Cart cart){
        return cartRepository.save(cart);
    }
}
