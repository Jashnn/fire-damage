package com.firedamage.service;

import org.springframework.stereotype.Service;

import com.firedamage.domain.ClientData;
import com.firedamage.dto.TotalDTO;
/*
 * this class will serve as service for Client 
 * 
 */
@Service
public interface ClientDataService {
	
	public ClientData create(ClientData clientData);
	public ClientData update(ClientData clientData);
	public ClientData getById(Long id);
	public TotalDTO getTotal(Long id);
}
