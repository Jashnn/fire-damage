package com.firedamage.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.firedamage.domain.ClientData;

@JsonInclude(value = Include.NON_NULL)
/*
 * This class will act as ui-object for client data response
 */
public class ClientDTO {

	private ClientData clientData;
	private String message;

	public ClientData getClientData() {
		return clientData;
	}

	public ClientDTO(ClientData clientData, String message) {
		super();
		this.clientData = clientData;
		this.message = message;
	}

	public void setClientData(ClientData clientData) {
		this.clientData = clientData;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
