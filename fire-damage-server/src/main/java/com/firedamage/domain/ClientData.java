package com.firedamage.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@JsonInclude(value = Include.NON_NULL)
public class ClientData implements Serializable {

	  @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String firstName;

	private String surName;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date dateOfBirth;

	@Enumerated(EnumType.STRING)
	private State state;

	@Enumerated(EnumType.STRING)
	private LandOwner landOwner;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date dateOfLCA;

	@Override
	public String toString() {
		return super.toString();
	}

	@JsonManagedReference
	@OneToMany(mappedBy = "clientData", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval=true)
	private List<InsuranceClaimData> insuranceData = new ArrayList<InsuranceClaimData>();
	
	
	public enum State {
		NSW, QLD, SA, TAS, VIC, WA
	}

	public enum LandOwner {
		NOT_SET, YES, NO,
	}

	public State getState() {
		return state;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setState(State state) {
		this.state = state;
	}

	public LandOwner getLandOwner() {
		return landOwner;
	}

	public void setLandOwner(LandOwner landOwner) {
		this.landOwner = landOwner;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSurName() {
		return surName;
	}

	public void setSurName(String surName) {
		this.surName = surName;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Date getDateOfLCA() {
		return dateOfLCA;
	}

	public List<InsuranceClaimData> getInsuranceData() {
		return insuranceData;
	}

	public void setInsuranceData(List<InsuranceClaimData> insuranceData) {
		this.insuranceData = insuranceData;
	}

	public void setDateOfLCA(Date dateOfLCA) {
		this.dateOfLCA = dateOfLCA;
	}

}
