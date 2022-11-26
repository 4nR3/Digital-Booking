package com.dh.hotel.repository;

import com.dh.hotel.model.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICiudadRepository extends JpaRepository<Ciudad,Long> {



}
