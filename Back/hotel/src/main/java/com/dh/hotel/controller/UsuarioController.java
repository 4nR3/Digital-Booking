package com.dh.hotel.controller;

import com.dh.hotel.model.Rol;
import com.dh.hotel.model.Usuario;
import com.dh.hotel.security.AuthenticationRequest;
import com.dh.hotel.service.RolService;
import com.dh.hotel.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private RolService rolService;

    @PostMapping
    public ResponseEntity <Usuario> agregarUsuario(@RequestBody Usuario usuario){

        Rol rolUser = rolService.buscarPorId(2L);
        usuario.setRol(rolUser);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        usuario.setContrasena(passwordEncoder.encode(usuario.getContrasena()));
        Usuario u = usuarioService.crearUsuario(usuario);

        if(u==null || usuario==null)
            return new ResponseEntity (HttpStatus.CONFLICT);

        return new ResponseEntity (HttpStatus.CREATED);
    }

    @GetMapping("/{userEmail}")
    public Usuario obtenerUsuario   (@PathVariable String userEmail) throws Exception{

        Usuario usuario = usuarioService.loadUserByUsername(userEmail);

        return usuario;

    }

}
