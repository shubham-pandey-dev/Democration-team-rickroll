package com.ondc.tw.digitalcatalog.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class CatalogProduct {

    @Id
    private UUID id;

    private double price;

    private long quantity;

    private String sku;

    private String weight;

    private String unit;

    private String mrp;

    private String image128;

    private String image256;

    private String parentCategory;

    private String subCategory;

    public static CatalogProduct from(MasterProduct masterproduct, Product product) {
        return new CatalogProduct(masterproduct.getId(), product.getPrice(), product.getQuantity(), masterproduct.getSku(), masterproduct.getWeight(), masterproduct.getUnit(), masterproduct.getMrp(), masterproduct.getImage128(), masterproduct.getImage256(), masterproduct.getParentCategory(), masterproduct.getSubCategory());
    }
}
