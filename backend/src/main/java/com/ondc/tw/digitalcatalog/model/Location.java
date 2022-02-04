package com.ondc.tw.digitalcatalog.model;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Location {

    private Address address;

    private GPSCoordinates gpsCoordinates;
}
