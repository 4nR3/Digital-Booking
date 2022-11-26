package com.dh.hotel.controller;

import com.dh.hotel.model.Imagen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dh.hotel.service.ImagenService;

import java.util.List;

@RestController
@RequestMapping("/imagenes")
public class ImagenController {

    @Autowired
    private ImagenService imagenService;

    @GetMapping("/{id}")
    public Imagen imagenPorId(@PathVariable("id")  Long id){
        return imagenService.buscarPorId(id);

    }

    @PostMapping
    public ResponseEntity<Imagen> subirImagen(@RequestBody Imagen imagen){
        imagenService.subirImagen(imagen);
        return new ResponseEntity<>(imagen, HttpStatus.OK);

    }

    //Falta com.dh.hotel.controller modificar

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id){

        //ResponseEntity<String> response =null;
        imagenService.deleteById(id);
        // response = ResponseEntity.status(HttpStatus.Ok).body("Eliminado")  ;
        return new ResponseEntity<>("imagen remove", HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Imagen>> listImagen(){
        List<Imagen> imagenes = imagenService.listarImagenes();

        return new ResponseEntity<>(imagenes,HttpStatus.OK);

    }






}
