package com.dh.hotel.controller;

import com.dh.hotel.model.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dh.hotel.service.CategoriaService;

import java.util.List;


@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @PostMapping
    public ResponseEntity <Categoria> agregarCategoria(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.agregarCategoria(categoria));
    }

    @GetMapping
    public List<Categoria> listarCategorias(){
        return categoriaService.listarCategorias();
    }

    @GetMapping("/{id}")
    public Categoria productoSegunId(@PathVariable("id")  Long id){
        return categoriaService.productoSegunId(id);
    }

    @PutMapping
    public Categoria editarCategoria(@RequestBody Categoria categoria){
        return categoriaService.modificarCategoria(categoria);
    }

    @DeleteMapping("/{id}")
    public boolean eliminarCategoroa(@PathVariable("id") Long id){
        return categoriaService.eliminarCategoria(id);
    }
}
