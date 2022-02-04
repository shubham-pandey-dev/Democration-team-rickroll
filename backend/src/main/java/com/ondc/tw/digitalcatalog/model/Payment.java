package com.ondc.tw.digitalcatalog.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
@Data
public class Payment {

    @Id
    private UUID id;

    PaymentType paymentType;
}
