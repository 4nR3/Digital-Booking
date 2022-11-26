package com.dh.hotel.controller;

import com.dh.hotel.security.AuthenticationRequest;
import com.dh.hotel.security.AuthenticationResponse;
import com.dh.hotel.security.JWTUtil;
import com.dh.hotel.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
public class JWTController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        }catch (BadCredentialsException e) {
            throw new Exception("Incorrect", e);
        }
        final UserDetails userDetails = usuarioService.loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse((jwt)));
    }


}
