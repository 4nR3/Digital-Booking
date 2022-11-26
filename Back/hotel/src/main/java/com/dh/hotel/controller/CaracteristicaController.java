package com.dh.hotel.controller;

import com.dh.hotel.model.Caracteristica;
import com.dh.hotel.service.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/caracteristica")
public class CaracteristicaController {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @PostMapping
    public ResponseEntity<Caracteristica> agregarCaracteristica(@RequestBody Caracteristica caracteristica){
        return ResponseEntity.ok(caracteristicaService.agregarCaracteristica(caracteristica));
    }

    @GetMapping
    public List<Caracteristica> listarCaracteristicas(){
        return caracteristicaService.listarCaracteristicas();
    }

    @GetMapping("/{id}")
    public Caracteristica productoSegunId(@PathVariable("id") Long id){
        return caracteristicaService.productoSegunId(id);
    }

    @PutMapping
    public Caracteristica editarCaracteristica(@RequestBody Caracteristica caracteristica){
        return caracteristicaService.modificarCaracteristica(caracteristica);
    }

    @DeleteMapping("/{id}")
    public boolean eliminarCategoroa(@PathVariable("id") Long id){
        return caracteristicaService.eliminarCaracteristica(id);
    }
}
