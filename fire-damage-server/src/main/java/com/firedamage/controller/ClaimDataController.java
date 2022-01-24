package com.firedamage.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.firedamage.domain.ClientData;
import com.firedamage.dto.ClientDTO;
import com.firedamage.dto.TotalDTO;
import com.firedamage.service.ClientDataService;

/*
 * This class is front controller for all the request
 * 
 */

@RestController
public class ClaimDataController {

	@Autowired
	ClientDataService clientDataService;
	
	/*
	 * Create client  
	 * @parameter Client data json  
	 * 
	 */
	@PostMapping(path = "/claimdata", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ClientDTO> create(@RequestBody ClientData user) {
		ClientData data = clientDataService.create(user);
		if (Objects.isNull(data)) {
			return new ResponseEntity<ClientDTO>(new ClientDTO(null, "Error while creating the client"),
					HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<ClientDTO>(new ClientDTO(data, null), HttpStatus.OK);
		}
	}

	/*
	 * Update Client
	 * @parameter Client data json  
	 */
	@CrossOrigin
	@PutMapping(path = "/claimdata", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ClientDTO> update(@RequestBody ClientData user) {
		ClientData data = clientDataService.update(user);
		if (Objects.isNull(data)) {
			return new ResponseEntity<ClientDTO>(new ClientDTO(null, "Error while updating ::" + user.getId()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<ClientDTO>(new ClientDTO(data, null), HttpStatus.OK);
		}
	}

	/*
	 * get Client 
	 * @parameter id of the client 
	 */
	@GetMapping("/claimdata/{id}")
	public ResponseEntity<ClientDTO> get(@PathVariable("id") Long id) {
		ClientData data = clientDataService.getById(id);
		if (Objects.isNull(data)) {
			return new ResponseEntity<ClientDTO>(new ClientDTO(null, "Not able to find client"), HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<ClientDTO>(new ClientDTO(data, null), HttpStatus.OK);
		}
	}

	/*
	 * get Client total 
	 * @parameter Client id 
	 */
	@GetMapping("/claimdata/total/{id}")
	public ResponseEntity<TotalDTO> getTotal(@PathVariable("id") Long id) {
		return new ResponseEntity<TotalDTO>(clientDataService.getTotal(id), HttpStatus.OK);
	}
}
