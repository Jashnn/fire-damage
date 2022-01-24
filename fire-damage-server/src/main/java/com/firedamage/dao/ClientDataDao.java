package com.firedamage.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.firedamage.domain.ClientData;

/*
 * This class is dao interface 
 */
@Repository
public interface ClientDataDao extends CrudRepository<ClientData, Long> {

	
}
