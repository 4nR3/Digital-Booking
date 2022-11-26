package com.dh.hotel.controller;

import com.dh.hotel.model.Producto;
import com.dh.hotel.model.Reserva;
import com.dh.hotel.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.dh.hotel.service.ProductoService;

import java.sql.Array;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.text.spi.DateFormatProvider;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/producto")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @Autowired
    private ReservaService reservaService;

    @GetMapping
    public List <Producto> listaDeProductos(){
        return productoService.listarProductos();
    }

    @GetMapping("/{id}")
    public Producto productoPorId(@PathVariable("id")  Long id){
        return productoService.buscarPorId(id);
    }


    @PostMapping
    public Producto guardarProducto(@RequestBody Producto producto){
        return productoService.agregarProducto(producto);
    }

    @PutMapping
    public Producto editarProducto(@RequestBody Producto producto){
        return productoService.modificarProducto(producto);
    }

    @DeleteMapping("/{id}")
    public boolean eliminarProducto(@PathVariable Long id){
        return productoService.eliminarProducto(id);
    }

    @GetMapping
    @RequestMapping("/aleatorios")
    public List <Producto> listaProductosAleatorios(){
        return productoService.listaProductosAleatorios();
    }

    @GetMapping
    @RequestMapping("/ciudad/{id}")
    public List <Producto> listarProductosSegunCiudad(@PathVariable Long id){
        return productoService.listarProductosPorCiudad(id);}

    @GetMapping
    @RequestMapping("/categoria/{id}")
    public List <Producto> listarProductosSegunCategoria(@PathVariable Long id){
        return productoService.listarSegunCategoria(id);
    }

    @GetMapping
    @RequestMapping("/fecha/{fecha}")
    public List <Producto> listarProductosSegunFecha(@PathVariable String fecha) throws Exception{
        return productoService.listarSegunFecha(fecha);
    }

    @GetMapping
    @RequestMapping("/ciudadYFecha/{ciudadYFecha}")
    public List <Producto> productosPorFechaYCiudad(@PathVariable String ciudadYFecha) throws Exception{
        return productoService.listarSegunCiudadYFecha(ciudadYFecha);
    }

    @GetMapping
    @RequestMapping("/categoriaYCiudadYFecha/{categoriaYCiudadYFecha}")
    public List <Producto> productosPorCategoriaYFechaYCiudad(@PathVariable String categoriaYCiudadYFecha) throws Exception{
        return productoService.listarSegunCiudadYFechaYCategoria(categoriaYCiudadYFecha);
    }

    @GetMapping
    @RequestMapping("/categoriaYFecha/{categoriaYFecha}")
    public List <Producto> productosPorCategoriaYFecha(@PathVariable String categoriaYFecha) throws Exception{
        return productoService.listarSegunFechaYCategoria(categoriaYFecha);
    }


    @GetMapping
    @RequestMapping("/ciudadYCategoria/{ciudadYCategoria}")
    public List <Producto> productosPorCiudadYCategoria(@PathVariable String ciudadYCategoria) throws Exception{
        return productoService.listarSegunCiudadYCategoria(ciudadYCategoria);
    }


}
