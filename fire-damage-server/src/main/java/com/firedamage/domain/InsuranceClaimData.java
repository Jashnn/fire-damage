package com.firedamage.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@Entity
@JsonInclude(value = Include.NON_NULL)
public class InsuranceClaimData {

	  @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	
	private String policyNumber;
	
	private Double groundCosts;
	
	private Double fencingCost;
	
	private Double personalLabourCost;
	
	private String comments;

	@JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ClientData_id", nullable = true)
	private ClientData clientData;


	@Override
	public String toString() {
		return super.toString();
	}

	public ClientData getClientData() {
		return clientData;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setClientData(ClientData clientData) {
		this.clientData = clientData;
	}

	public String getPolicyNumber() {
		return policyNumber;
	}

	public void setPolicyNumber(String policyNumber) {
		this.policyNumber = policyNumber;
	}

	public Double getGroundCosts() {
		return groundCosts;
	}

	public void setGroundCosts(Double groundCosts) {
		this.groundCosts = groundCosts;
	}

	public Double getFencingCost() {
		return fencingCost;
	}

	public void setFencingCost(Double fencingCost) {
		this.fencingCost = fencingCost;
	}

	public Double getPersonalLabourCost() {
		return personalLabourCost;
	}

	public void setPersonalLabourCost(Double personalLabourCost) {
		this.personalLabourCost = personalLabourCost;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	
	
}
