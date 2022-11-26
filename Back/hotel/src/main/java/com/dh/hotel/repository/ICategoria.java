package com.dh.hotel.repository;

import com.dh.hotel.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ICategoria extends JpaRepository<Categoria,Long> {

    @Transactional
    @Modifying
    @Query ("update Categoria set titulo = ?1, descripcion = ?2, UrlImagen = ?3 where id =?4")
    void updateById(String titulo, String descripcion, String urlImagen, Long id);

}
