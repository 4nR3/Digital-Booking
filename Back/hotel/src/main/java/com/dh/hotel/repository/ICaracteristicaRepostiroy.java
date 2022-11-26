package com.dh.hotel.repository;

import com.dh.hotel.model.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ICaracteristicaRepostiroy extends JpaRepository<Caracteristica,Long> {

    @Transactional
    @Modifying
    @Query("update Caracteristica set nombre = ?1 where id =?2")
    void updateById(String nombre, Long id);

}
