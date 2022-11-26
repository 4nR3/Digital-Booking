package com.dh.hotel.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="ciudades")
@Getter
@Setter
public class Ciudad {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idCiudad;
    private String Nombre;
    private String Provincia;
    private String Pais;
    private String Mapa_Url;


    public Ciudad() {
    }

    public Ciudad(String nombre, String provincia, String pais, String mapa_url){
        this.Nombre=nombre;
        this.Provincia=provincia;
        this.Pais=pais;
        this.Mapa_Url=mapa_url;
    }
}
