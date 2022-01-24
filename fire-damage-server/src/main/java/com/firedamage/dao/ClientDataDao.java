package com.firedamage.dao;

import com.firedamage.domain.ClientData;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
 * This class is dao interface 
 */
@Repository
public interface ClientDataDao extends CrudRepository<ClientData, Long> {

	
}
