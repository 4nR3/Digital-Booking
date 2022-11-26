package com.dh.hotel.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import com.dh.hotel.model.Caracteristica;

@Getter
@Setter
@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProducto;
    private String nombre;
    private String tituloDescripcion;
    private String descripcion;
    private String direccion;
    private String normas;
    private String seguridad;
    private String cancelacion;
    private Double latitud;
    private Double longitud;

    @OneToOne
    @JoinColumn(name = "categoria_id",referencedColumnName = "idCategoria")
    private Categoria categoria;

    @OneToOne
    @JoinColumn(name = "ciudad_id",referencedColumnName = "idCiudad")
    private Ciudad ciudad;

    @ManyToMany
    @JoinColumn(name = "imagenes_id")
    private List <Imagen> imagen;

    @ManyToMany
    @JoinColumn(name = "caracteristica_id")
    private List <Caracteristica> caracteristica;

    public Producto(){}

    public Producto (String nombre, String tituloDescripcion, String descripcion,String direccion, Categoria categoria, Ciudad ciudad, List <Imagen> imagen, List <Caracteristica> caracteristica, String normas, String seguridad,String cancelacion, Double latitud, Double longitud){
        this.nombre=nombre;
        this.tituloDescripcion=tituloDescripcion;
        this.descripcion=descripcion;
        this.direccion=direccion;
        this.categoria=categoria;
        this.ciudad=ciudad;
        this.imagen=imagen;
        this.caracteristica=caracteristica;
        this.normas= normas;
        this.seguridad= seguridad;
        this.cancelacion= cancelacion;
        this.latitud=latitud;
        this.longitud=longitud;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "idProducto=" + idProducto +
                ", nombre='" + nombre + '\'' +
                ", tituloDescripcion='" + tituloDescripcion + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", categoria=" + categoria +
                ", ciudad=" + ciudad +
                ", imagen=" + imagen +
                ", caracteristica=" + caracteristica +
                '}';
    }
}
