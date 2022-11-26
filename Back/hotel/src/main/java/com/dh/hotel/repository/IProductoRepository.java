package com.dh.hotel.repository;

import com.dh.hotel.model.Caracteristica;
import com.dh.hotel.model.Categoria;
import com.dh.hotel.model.Ciudad;
import com.dh.hotel.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Repository
public interface IProductoRepository extends JpaRepository<Producto,Long> {

    @Transactional
    @Modifying
    @Query("update Producto set nombre = ?1, tituloDescripcion = ?2, descripcion = ?3, categoria = ?4, ciudad = ?5 where id =?6")
    void updateById(String nombre, String titulo, String descripcion, Categoria categoria, Ciudad ciudad, Long id);

    @Query("select p from Producto p where ciudad_id =?1")
    List <Producto> listarSegunCiudad(Long idCiudad);

    @Query("select p from Producto p where categoria_id =?1")
    List <Producto> listarSegunCategoria(Long idCategoria);

}
