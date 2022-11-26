package com.dh.hotel.service;

import com.dh.hotel.model.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dh.hotel.repository.ICategoria;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private ICategoria iCategoria;

    public Categoria agregarCategoria(Categoria categoria){
        return iCategoria.save(categoria);
    }

    public List <Categoria> listarCategorias(){
        return iCategoria.findAll();
    }

    public Categoria productoSegunId(Long id){
        return iCategoria.findById(id).get();
    }

    public Categoria modificarCategoria(Categoria categoria){
        String Titulo = categoria.getTitulo();
        String Descripcion = categoria.getDescripcion();
        String UrlImagen = categoria.getUrlImagen();
        Long id=categoria.getIdCategoria();

        if(iCategoria.findById(id).get()==null)
            return null;

        iCategoria.updateById(Titulo,Descripcion,UrlImagen,id);

        return iCategoria.findById(categoria.getIdCategoria()).get();
    }

    public boolean eliminarCategoria(Long id){
        Categoria categoria = iCategoria.findById(id).get();

        if(categoria==null)
            return false;
        else
            iCategoria.delete(categoria);

        return true;
    }

}
