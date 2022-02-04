package com.ondc.tw.digitalcatalog.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@Entity
public class Product {
    @Id
    private UUID id;

    private double price;

    private long quantity;

    private UUID masterId;
}
