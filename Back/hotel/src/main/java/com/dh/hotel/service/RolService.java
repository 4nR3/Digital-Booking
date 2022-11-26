package com.dh.hotel.service;

import com.dh.hotel.model.Rol;
import com.dh.hotel.repository.IRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolService {

    @Autowired
    private IRol iRol;

    public Rol crearRol(Rol rol){
        return iRol.save(rol);
    }

    public Rol buscarPorId(Long id){
        return iRol.getById(id);
    }

}
