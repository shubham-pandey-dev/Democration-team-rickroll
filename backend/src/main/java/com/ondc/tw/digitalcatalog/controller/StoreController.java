package com.ondc.tw.digitalcatalog.controller;

import com.ondc.tw.digitalcatalog.dto.StoreDTO;
import com.ondc.tw.digitalcatalog.model.Store;
import com.ondc.tw.digitalcatalog.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class StoreController {

    @Autowired
    private StoreService storeService;

    @PostMapping(path = "store/create")
    public String createStore(@RequestBody StoreDTO storeDTO) {
        return storeService.createStore(storeDTO);
    }

    @GetMapping(path = "store/get")
    public Store getStore(@RequestParam String id) {
        return storeService.getStore(id);
    }
}
