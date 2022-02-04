package com.ondc.tw.digitalcatalog.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;
import java.util.UUID;

@Data
@Entity
public class Store {

    @Id
    private String id;

    private String name;

    List<String> contactNumberList;

    Location location;

    Catalog catalog;

}
