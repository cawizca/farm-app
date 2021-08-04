package com.kavishka.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
    @Id
    private String id;
    private String productName;
    private String productDescription;
    private Double weight;
    private String image;
    private int productPriceRs;
    private int productPriceCent;
    private int quantity;
}
