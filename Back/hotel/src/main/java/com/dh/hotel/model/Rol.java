package com.dh.hotel.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRoles;
    private String nombre;

    public Rol(){}

    public Rol(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Rol{" +
                "idRoles=" + idRoles +
                ", nombre='" + nombre + '\'' +
                '}';
    }
}
