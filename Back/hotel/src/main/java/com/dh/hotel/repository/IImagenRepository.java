package com.dh.hotel.repository;

import com.dh.hotel.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImagenRepository extends JpaRepository<Imagen,Long> {
}
