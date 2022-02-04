package com.ondc.tw.digitalcatalog.dto;

import com.ondc.tw.digitalcatalog.model.Catalog;
import com.ondc.tw.digitalcatalog.model.Location;
import lombok.Data;

import java.util.List;

@Data
public class StoreDTO {

    private String name;

    List<String> contactNumberList;

    Location location;

    Catalog catalog;
}
