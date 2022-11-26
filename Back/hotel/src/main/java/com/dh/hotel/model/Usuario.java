package com.dh.hotel.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
@Entity
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;
    private String nombre;
    private String apellido;
    private String email;
    private String contrasena;
    private String ciudad;

    @ManyToOne
    @JoinColumn(name = "rol_id", referencedColumnName = "idRoles")
    private Rol rol;

    public Usuario(){}

    public Usuario(String nombre, String apellido, String email, String contrasena, String ciudad, Rol rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
        this.ciudad = ciudad;
        this.rol = rol;
    }

    public Usuario(String nombre, String apellido, String email, String contrasena, String ciudad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
        this.ciudad = ciudad;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority autorizacion = new SimpleGrantedAuthority(rol.getNombre());
        return Collections.singletonList(autorizacion);
    }

    @Override
    public String getPassword() {
        return contrasena;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "idUsuario=" + idUsuario +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", email='" + email + '\'' +
                ", contrasena='" + contrasena + '\'' +
                ", ciudad='" + ciudad + '\'' +
                ", rol=" + rol +
                '}';
    }
}
