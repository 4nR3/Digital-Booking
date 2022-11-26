package com.dh.hotel.controller;


import com.dh.hotel.model.Producto;
import com.dh.hotel.model.Reserva;
import com.dh.hotel.model.Usuario;
import com.dh.hotel.security.JWTUtil;
import com.dh.hotel.service.ReservaService;
import com.dh.hotel.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reserva")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity <Reserva> guardarReserva(@RequestBody Reserva reserva, @RequestHeader (name="Authorization") String token){

        return new ResponseEntity<>(reservaService.crearReserva(reserva),HttpStatus.CREATED);
    }

    @GetMapping()
    public List <Reserva> obtenerReservas(){
        return reservaService.obtenerReservas();
    }

    @GetMapping("/producto/{id}")
    public List <Reserva> obtenerReservasSegunProducto(@PathVariable Long id){
        return reservaService.reservasSegunProducto(id);
    }

    @GetMapping("/usuario/{id}")
    public List <Producto> obtenerReservasSegunUsuario(@PathVariable Long id){
        return reservaService.reservasSegunUsuario(id);
    }

}
