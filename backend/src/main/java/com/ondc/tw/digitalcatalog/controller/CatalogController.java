package com.ondc.tw.digitalcatalog.controller;

import com.ondc.tw.digitalcatalog.model.CatalogProduct;
import com.ondc.tw.digitalcatalog.model.Product;
import com.ondc.tw.digitalcatalog.service.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CatalogController {

    @Autowired
    private CatalogService catalogService;

    @PostMapping(path = "/catalog/products/add")
    public void addProducts(@RequestBody List<Product> products, @RequestHeader("id") String id) {
        catalogService.addProducts(products, id);
    }

    @PostMapping(path = "/catalog/products/addCustomProduct")
    public void addCustomProducts(@RequestBody CatalogProduct product, @RequestHeader("id") String id) {
        catalogService.addCustomProduct(product, id);
    }

    @GetMapping(path = "/catalog/products/get")
    public List<CatalogProduct> getProducts(@RequestHeader("id") String id) {
        return catalogService.getProducts(id);
    }

    @PutMapping(path = "/catalog/products/update")
    public void updateProducts(@RequestBody Product products, @RequestHeader("id") String id){
        catalogService.updateProducts(products, id);
    }

    @DeleteMapping(path = "/catalog/products/delete")
    public void deleteProducts(@RequestBody Product products, @RequestHeader("id") String id){
        catalogService.deleteProducts(products, id);
    }

}
