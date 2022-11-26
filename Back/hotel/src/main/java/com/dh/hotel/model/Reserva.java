package com.dh.hotel.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.sql.Time;

@Getter
@Setter
@Entity
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idReserva;
    private Time horaReserva;
    private Date inicioReserva;
    private Date finReserva;

    @ManyToOne
    @JoinColumn(name = "productos_id",referencedColumnName = "idProducto")
    private Producto productos;

    @ManyToOne
    @JoinColumn(name = "usuarios_id",referencedColumnName = "idUsuario")
    private Usuario usuarios;

    public Reserva(){}

    public Reserva(Time tiempo, Date fechaI, Date fechaF, Producto producto, Usuario usuario){
        this.horaReserva=tiempo;
        this.inicioReserva=fechaI;
        this.finReserva=fechaF;
        this.productos=producto;
        this.usuarios=usuario;

    }

    @Override
    public String toString() {
        return "Reserva{" +
                "idReserva=" + idReserva +
                ", horaReserva=" + horaReserva +
                ", inicioReserva=" + inicioReserva +
                ", finReserva=" + finReserva +
                ", productos=" + productos +
                ", usuarios=" + usuarios +
                '}';
    }
}
