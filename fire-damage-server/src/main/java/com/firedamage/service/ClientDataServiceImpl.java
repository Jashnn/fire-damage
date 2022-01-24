package com.firedamage.service;

import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.firedamage.dao.ClientDataDao;
import com.firedamage.dao.InsuranceClaimDaoData;
import com.firedamage.domain.ClientData;
import com.firedamage.domain.InsuranceClaimData;
import com.firedamage.dto.TotalDTO;

/*
 * this class will implementation of Client service 
 * 
 */
@Service
@Transactional
public class ClientDataServiceImpl implements ClientDataService {
	
	@Autowired
	private ClientDataDao clientDataDao;
	
	@Autowired
	private InsuranceClaimDaoData insuranceDao;

	@Override
	public ClientData create(ClientData clientData) {
		try {
			ClientData data = clientDataDao.save(clientData);
			return data;
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public ClientData update(ClientData clientData) {
		return clientDataDao.save(clientData);
	}

	@Override
	public ClientData getById(Long id) {
		Optional<ClientData> data = clientDataDao.findById(id);
		if(data.isPresent()) {
			return data.get();
		}else {
			return null;
		}
	}

	@Override
	public TotalDTO getTotal(Long id) {
		ClientData data = getById(id);
		
		if(Objects.isNull(data)) {
			return new TotalDTO(id, 0.0, "Client Id is invalid");
		}
		
		double total = data.getInsuranceData().stream().mapToDouble( d -> {
			return (d.getFencingCost() == null ? 0.0 : d.getFencingCost().doubleValue()) + 
					(d.getGroundCosts() == null ? 0.0 : d.getGroundCosts().doubleValue()) + 
					(d.getPersonalLabourCost() == null ? 0.0 : d.getPersonalLabourCost().doubleValue());
		}).sum();
		return new TotalDTO(id,total, null);
	}

}
