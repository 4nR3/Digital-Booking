package com.dh.hotel.service;

import com.dh.hotel.model.Usuario;
import com.dh.hotel.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    private IUsuarioRepository iUsuarioRepository;

    public Usuario crearUsuario(Usuario usuario){

        if(loadUserByUsername(usuario.getEmail())==null)
            return iUsuarioRepository.save(usuario);

        return null;
    }

    public List<Usuario> listarUsuarios(Usuario usuario){
        return iUsuarioRepository.findAll();
    }

    public Usuario buscarSegunId(Long id){
        return iUsuarioRepository.findById(id).get();
    }

    @Override
    public Usuario loadUserByUsername(String userEmail) throws UsernameNotFoundException {

        Usuario usuario = iUsuarioRepository.findByEmail(userEmail);

        return usuario;
    }
}
