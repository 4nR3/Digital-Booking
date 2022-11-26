package com.dh.hotel.service;

import com.dh.hotel.model.Caracteristica;
import com.dh.hotel.repository.ICaracteristicaRepostiroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaracteristicaService {

    @Autowired
    private ICaracteristicaRepostiroy iCaracteristica;

    public Caracteristica agregarCaracteristica(Caracteristica caracteristica){
        return iCaracteristica.save(caracteristica);
    }

    public List<Caracteristica> listarCaracteristicas(){
        return iCaracteristica.findAll();
    }

    public Caracteristica productoSegunId(Long id){
        return iCaracteristica.findById(id).get();
    }

    public Caracteristica modificarCaracteristica(Caracteristica caracteristica){
        String nombre = caracteristica.getNombre();
        Long id=caracteristica.getIdCaracteristica();

        if(iCaracteristica.findById(id).get()==null)
            return null;

        iCaracteristica.updateById(nombre,id);

        return iCaracteristica.findById(caracteristica.getIdCaracteristica()).get();
    }

    public boolean eliminarCaracteristica(Long id){
        Caracteristica caracteristica = iCaracteristica.findById(id).get();

        if(caracteristica==null)
            return false;
        else
            iCaracteristica.delete(caracteristica);

        return true;
    }
}
