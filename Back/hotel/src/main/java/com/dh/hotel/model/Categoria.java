package com.dh.hotel.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Categoria {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idCategoria;
    private String Titulo;
    private String Descripcion;
    private String UrlImagen;

    public Categoria (){}

    public Categoria(String titulo, String descripcion, String UrlImagen){
        this.Titulo=titulo;
        this.Descripcion=descripcion;
        this.UrlImagen=UrlImagen;
    }

}
