package com.kavishka.backend.controller;

import com.kavishka.backend.domain.Product;
import com.kavishka.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @PostMapping("/")
    public Product addProduct(@RequestBody Product product){
        return productRepository.save(product);
    }

    @GetMapping("/{id}")
    public Product getOneProduct(@PathVariable String id){
        return productRepository.findById(id).orElse(null);
    }
}
