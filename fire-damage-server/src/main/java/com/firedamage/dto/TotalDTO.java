package com.firedamage.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)

/*
 * This class will act as ui-object for client data response
 */
public class TotalDTO {
	
	private Long clientId;
	private Double claimTotal;
	private String message;

	public TotalDTO(Long id, Double claimTotal, String message) {
		super();
		this.clientId = id;
		this.claimTotal = claimTotal;
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}

	public Double getClaimTotal() {
		return claimTotal;
	}

	public void setClaimTotal(Double claimTotal) {
		this.claimTotal = claimTotal;
	}
}
