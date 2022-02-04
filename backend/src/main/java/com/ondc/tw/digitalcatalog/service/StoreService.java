package com.ondc.tw.digitalcatalog.service;

import com.ondc.tw.digitalcatalog.dto.StoreDTO;
import com.ondc.tw.digitalcatalog.model.Catalog;
import com.ondc.tw.digitalcatalog.model.Store;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StoreService {

    Map<String, Store> storeMap = new HashMap<>();

    public String createStore(StoreDTO storeDTO) {
        if(storeDTO.getContactNumberList().size()==0)
            return null;
        if (!storeMap.containsKey(storeDTO.getContactNumberList().get(0))) {
            Store store = new Store();
            store.setId(storeDTO.getContactNumberList().get(0));
            store.setName(storeDTO.getName());
            store.setContactNumberList(storeDTO.getContactNumberList());
            store.setLocation(storeDTO.getLocation());
            store.setCatalog(new Catalog());
            storeMap.put(store.getId(), store);
            return store.getId();
        }
        return null;
    }

    public Store getStore(String id) {
        return storeMap.get(id);
    }
}
