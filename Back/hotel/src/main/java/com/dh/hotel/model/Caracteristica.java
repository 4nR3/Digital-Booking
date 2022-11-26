package com.dh.hotel.model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCaracteristica;
    private String nombre;
    private String clase;

    public Caracteristica(){}

    public Caracteristica(String nombre, String clase) {
        this.nombre=nombre;
        this.clase=clase;
    }
}
