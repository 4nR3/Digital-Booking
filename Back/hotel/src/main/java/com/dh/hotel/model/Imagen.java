package com.dh.hotel.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="imagenes")
@Getter
@Setter
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idImagen;
    private String titulo;
    private String url;
    //van con Mayusculas?


    public Imagen() {
    }

    public Imagen(String titulo, String url) {
        this.titulo=titulo;
        this.url=url;
    }
}
