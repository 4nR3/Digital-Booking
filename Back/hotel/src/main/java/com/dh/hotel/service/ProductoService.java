package com.dh.hotel.service;

import com.dh.hotel.model.*;
import com.dh.hotel.repository.IReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dh.hotel.repository.IProductoRepository;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class ProductoService{

    @Autowired
    private IProductoRepository iProducto;

    @Autowired
    private IReservaRepository iReservaRepository;

    public Producto agregarProducto(Producto producto){
        return iProducto.save(producto);
    }

    public List <Producto> listarProductos(){
        return iProducto.findAll();
    }

    public Producto buscarPorId(Long id){
        return iProducto.findById(id).get();
    }

    public Producto modificarProducto(Producto producto){
        String Nombre = producto.getNombre();
        String tituloDesc = producto.getTituloDescripcion();
        String Descripcion = producto.getDescripcion();
        Categoria categoria = producto.getCategoria();
        Ciudad ciudad = producto.getCiudad();
        Long id=producto.getIdProducto();

        if(!iProducto.findById(id).isPresent())
            return null;

        iProducto.updateById(Nombre,tituloDesc,Descripcion,categoria,ciudad,id);

        return producto;
    }

    public boolean eliminarProducto(Long id){
        Producto producto = iProducto.findById(id).get();

        if(producto==null)
            return false;
        else
            iProducto.delete(producto);

        return true;
    }

    public List <Producto> listaProductosAleatorios(){
        List <Producto> listaAleatoria = listarProductos();

        Collections.shuffle(listaAleatoria);

        return listaAleatoria;
    }

    public List <Producto> listarProductosPorCiudad(Long idCiudad){
        return iProducto.listarSegunCiudad(idCiudad);
    }

    public List <Producto> listarSegunCategoria(Long idCategoria){
        return iProducto.listarSegunCategoria(idCategoria);
    }

    public List <Producto> listarSegunFecha(String fecha) throws Exception {

        String fechaI="",fechaF="";

        fechaI = fecha.substring(0,4)+"/"+fecha.substring(4,6)+"/"+fecha.substring(6,8);

        if(fecha.length()<19)
            {fechaF = fechaI;}
        else
            {fechaF=fecha.substring(11,15)+"/"+fecha.substring(15,17)+"/"+fecha.substring(17,19);}

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date dFechaI, dFechaF;
        dFechaI = sdf.parse(fechaI);
        dFechaF = sdf.parse(fechaF);

        List <Reserva> reservasSegunFecha = iReservaRepository.reservasSegunFecha(dFechaI,dFechaF);
        List <Producto> productos = listarProductos();
        Set <Long> idProductos = new LinkedHashSet<>();

        for(int f=0;f<reservasSegunFecha.size();f++)
            {idProductos.add(reservasSegunFecha.get(f).getProductos().getIdProducto());}

        for(Long l : idProductos) {
            int numero = (int) (long)l;
            productos.remove(numero-1);
        }

        return productos;
    }

    public List <Producto> listarSegunCiudadYFecha(String ciudadYFecha) throws Exception{

        int ubicacionEspacio=0;


        //cuando el caracter del string es = a " " (osea una espacio) me guarda la ubicacion para que en ciudad
        // (linea 117) me guarde desde cero hasta ahí el valor, osea el id y despues en fecha me guarda desde un valor
        // más osea +1
        for (int i = 0; i <  ciudadYFecha.length(); i++) {
            if(ciudadYFecha.charAt(i)==' ')
                {ubicacionEspacio=i;
                break;}
        }
        String ciudad = ciudadYFecha.substring(0,ubicacionEspacio); //valor id ciudad
        Long idProductos = Long.parseLong(ciudad); // creo que convierte a Long el idCiudad
        String fecha = ciudadYFecha.substring(ubicacionEspacio+1); //valor id fecha

        List <Producto> listaProductosPorFecha = listarSegunFecha(fecha);
        List <Producto> listaFinal = new ArrayList<>();

        //toma los productos que coinciden el id de ciudad
        //a la lista de productos por fecha la recorro y si en el producto coincide el idCiudad con el "idProducto"
        // (que es el id de ciudad que use antes) guarda el producto en una lista final

        for(Producto p : listaProductosPorFecha){
            if(p.getCiudad().getIdCiudad()==idProductos){
                listaFinal.add(p);
            }
        }

        return listaFinal;

    }


    public List <Producto> listarSegunCiudadYFechaYCategoria(String categoriaYCiudadYFecha) throws Exception {

        //1° extraigo id´s, quizá primero el de ciudadYFecha para usar metodo antesrior y despues el de categoria
        //osea separo al 2do " "

        int primerSeparador=0 ;

        for (int i = 0; i <  categoriaYCiudadYFecha.length(); i++) {
            if(categoriaYCiudadYFecha.charAt(i)==' ')
            {primerSeparador=i;
                break;}
        }
        String categoria = categoriaYCiudadYFecha.substring(0,primerSeparador); //valor id categoria, el substring toma el caracter anterior
        Long idProductosCategoria = Long.parseLong(categoria); //lo convierto a tipo Long al id de la categori
        String ciudadYFecha = categoriaYCiudadYFecha.substring(primerSeparador+1); //String para usar en listar fecha y ciudad

        List <Producto> listaProductosPorCiudadYFecha = listarSegunCiudadYFecha(ciudadYFecha);
        List <Producto> listaFinal = new ArrayList<>();

        for(Producto p : listaProductosPorCiudadYFecha){
            if(p.getCategoria().getIdCategoria()==idProductosCategoria){
                listaFinal.add(p);
            }
        }



        return listaFinal;

    }


    public List <Producto> listarSegunFechaYCategoria(String categoriaYFecha) throws Exception {

       /*Toda esta parte podria ser un metodo porque lo use varias veces*/
        int primerSeparador=0 ;

        for (int i = 0; i <  categoriaYFecha.length(); i++) {
            if(categoriaYFecha.charAt(i)==' ')
            {primerSeparador=i;
                break;}
        }
        String categoria = categoriaYFecha.substring(0,primerSeparador);
        Long idProductosCategoria = Long.parseLong(categoria);
        String fecha = categoriaYFecha.substring(primerSeparador+1);

        List <Producto> listaProductosPorFecha = listarSegunFecha(fecha);
        List <Producto> listaFinal = new ArrayList<>();

        for(Producto p : listaProductosPorFecha){
            if(p.getCategoria().getIdCategoria()==idProductosCategoria){
                listaFinal.add(p);
            }
        }



        return listaFinal;

    }

    public List <Producto> listarSegunCiudadYCategoria(String ciudadYCategoria) throws Exception {

        /*Toda esta parte podria ser un metodo porque lo use varias veces*/
        int primerSeparador=0 ;

        for (int i = 0; i <  ciudadYCategoria.length(); i++) {
            if(ciudadYCategoria.charAt(i)==' ')
            {primerSeparador=i;
                break;}
        }
        String ciudad = ciudadYCategoria.substring(0,primerSeparador);
        Long idProductosCiudad = Long.parseLong(ciudad);
        String categoria = ciudadYCategoria.substring(primerSeparador+1);
        Long categoriaId = Long.parseLong(categoria);

        List <Producto> listaProductosPorCategoria = listarSegunCategoria(categoriaId);
        List <Producto> listaFinal = new ArrayList<>();

        for(Producto p : listaProductosPorCategoria){
            if(p.getCiudad().getIdCiudad()==idProductosCiudad){
                listaFinal.add(p);
            }
        }



        return listaFinal;

    }


}
