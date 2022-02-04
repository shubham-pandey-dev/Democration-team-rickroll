package com.ondc.tw.digitalcatalog.controller;

import com.ondc.tw.digitalcatalog.model.MasterProduct;
import com.ondc.tw.digitalcatalog.service.MasterDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class MasterDataController {
    @Autowired
    private MasterDataService masterDataService;

    @GetMapping(path = "catalog/master/search")
    public List<MasterProduct> searchProducts(@RequestParam String query) {
        return masterDataService.searchProducts(query);
    }
}
