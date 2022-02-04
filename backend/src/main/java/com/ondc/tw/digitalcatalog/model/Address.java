package com.ondc.tw.digitalcatalog.model;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Address {

    private String addressLine1;

    private String addressLine2;

    private String landmark;

    private String city;

    private String state;

    private long postalCode;
}
