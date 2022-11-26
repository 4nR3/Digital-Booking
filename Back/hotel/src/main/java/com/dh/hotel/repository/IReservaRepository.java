package com.dh.hotel.repository;

import com.dh.hotel.model.Producto;
import com.dh.hotel.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface IReservaRepository extends JpaRepository <Reserva,Long> {

    @Query("select r from Reserva r where productos_id =?1")
    List <Reserva> obtenerSegunProducto(Long id);

    @Query("select r from Reserva r where INICIO_RESERVA BETWEEN ?1 AND ?2 " +
            "OR FIN_RESERVA BETWEEN ?1 AND ?2 " +
            "OR ?1 BETWEEN INICIO_RESERVA AND FIN_RESERVA " +
            "OR ?2 BETWEEN INICIO_RESERVA AND FIN_RESERVA " +
            "ORDER BY PRODUCTOS_ID DESC")
    List <Reserva> reservasSegunFecha(Date inicio, Date fin);

    @Query("select r.productos from Reserva r join r.productos where usuarios_id =?1")
    List <Producto> reservasSegunUsuario(Long id);
}
