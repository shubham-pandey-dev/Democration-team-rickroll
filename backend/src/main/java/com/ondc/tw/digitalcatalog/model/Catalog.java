package com.ondc.tw.digitalcatalog.model;

import lombok.Data;

import javax.persistence.Entity;
import java.util.Map;
import java.util.UUID;

@Data
@Entity
public class Catalog {
    private Map<UUID, CatalogProduct> catalogProductMap;
}