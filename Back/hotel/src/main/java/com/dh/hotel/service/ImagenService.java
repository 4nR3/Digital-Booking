package com.dh.hotel.service;

import com.dh.hotel.model.Imagen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dh.hotel.repository.IImagenRepository;

import java.util.List;

@Service
public class ImagenService {

    @Autowired
    private IImagenRepository iImagenRepository;

    public void subirImagen(Imagen imagen){
        iImagenRepository.save(imagen);
    }

    public Imagen buscarPorId(Long id){
       Imagen imagen = iImagenRepository.findById(id).get();
        return imagen;
    }


    public List<Imagen> listarImagenes(){
        List<Imagen> imagen = iImagenRepository.findAll();
        return imagen;
    }

    public void deleteById(Long id){
        iImagenRepository.deleteById(id);

    }




}
