package com.ondc.tw.digitalcatalog.model;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class GPSCoordinates {
    private float longitude;
    private float latitude;
}
