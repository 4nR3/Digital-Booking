package com.dh.hotel.service;

import com.dh.hotel.model.Producto;
import com.dh.hotel.model.Reserva;
import com.dh.hotel.repository.IReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ReservaService {

    @Autowired
    private IReservaRepository iReservaRepository;

    public Reserva crearReserva(Reserva reserva){
        return iReservaRepository.save(reserva);
    }

    public List <Reserva> reservasSegunProducto(Long id){
        return iReservaRepository.obtenerSegunProducto(id);
    }

    public List <Reserva> obtenerReservas(){
        return iReservaRepository.findAll();
    }

    public List <Reserva> reservasSegunFecha(Date inicio, Date fin){
        return iReservaRepository.reservasSegunFecha(inicio,fin);
    }

    public List <Producto> reservasSegunUsuario(Long id){
        return iReservaRepository.reservasSegunUsuario(id);
    }

}
