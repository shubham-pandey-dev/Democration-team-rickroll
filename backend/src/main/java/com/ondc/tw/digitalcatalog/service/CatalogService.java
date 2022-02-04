package com.ondc.tw.digitalcatalog.service;

import com.ondc.tw.digitalcatalog.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CatalogService {
    @Autowired
    MasterDataService masterDataService;

    @Autowired
    StoreService storeService;

    private Map<UUID, CatalogProduct> getCatalog(String id) {
        Store store = storeService.storeMap.get(id);
        Catalog catalog = store.getCatalog();
        if(catalog.getCatalogProductMap()==null)
            catalog.setCatalogProductMap(new HashMap<>());
        return catalog.getCatalogProductMap();
    }

    public void addProducts(List<Product> productList, String id) {
        Map<UUID, CatalogProduct> catalogProductMap = getCatalog(id);

        for (Product product : productList) {
            CatalogProduct catalogProduct = findById(product.getMasterId(), id);
            if (catalogProduct == null)
                catalogProductMap.put(product.getMasterId(), CatalogProduct.from(masterDataService.findById(product.getMasterId()), product));
        }
    }

    public void addCustomProduct(CatalogProduct catalogProduct, String id) {
        Map<UUID, CatalogProduct> catalogProductMap = getCatalog(id);

        UUID customProductId = UUID.randomUUID();
        catalogProduct.setId(customProductId);
        catalogProductMap.put(customProductId, catalogProduct);
    }

    public List<CatalogProduct> getProducts(String id) {
        Map<UUID, CatalogProduct> catalogProductMap = getCatalog(id);
        List<CatalogProduct> catalogProductList= new ArrayList<>(catalogProductMap.values());
        return catalogProductList;
    }

    public CatalogProduct findById(UUID id, String mobileId) {
        Map<UUID, CatalogProduct> catalogProductMap = getCatalog(mobileId);

        if (catalogProductMap.containsKey(id))
            return catalogProductMap.get(id);
        return null;
    }

    public void updateProducts(Product product, String id) {
        CatalogProduct testProduct = findById(product.getMasterId(), id);
        if (testProduct != null) {
            testProduct.setPrice(product.getPrice());
            testProduct.setQuantity(product.getQuantity());
        }
    }

    public void deleteProducts(Product product, String id) {
        Map<UUID, CatalogProduct> catalogProductMap = getCatalog(id);

        catalogProductMap.remove(product.getMasterId());
    }
}