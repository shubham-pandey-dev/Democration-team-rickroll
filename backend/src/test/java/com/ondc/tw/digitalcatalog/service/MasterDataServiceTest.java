package com.ondc.tw.digitalcatalog.service;

import com.ondc.tw.digitalcatalog.model.MasterProduct;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class MasterDataServiceTest {

    @Test
    void testBarcodeValidator() {
        String query = "1212424231312323131313131311323421";
        MasterDataService masterDataService = new MasterDataService();
        assertEquals(masterDataService.barcodeValidator(query),true);
    }
    @Test
    void testBarcodeValidatorFalse() {
        String query = "1212424231312323131313131skfsifwi311323421";
        MasterDataService masterDataService = new MasterDataService();
        assertEquals(masterDataService.barcodeValidator(query),false);
    }

    @Test
    void testTextValidator() {
        String text = "Britannia biscuits packet orange";
        MasterDataService masterDataService = new MasterDataService();
        MasterProduct item = new MasterProduct();
        item.setSku("biscuits");
        MasterProduct item2 = new MasterProduct();
        item2.setSku("soap");
        MasterProduct item3 = new MasterProduct();
        item3.setSku("orange");

        masterDataService.masterProductList = Arrays.asList(item, item2, item3);

        List<MasterProduct> items = masterDataService.searchProducts(text);
        assertEquals(items.size(),2);
    }

}