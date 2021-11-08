package com.service.serviceDentalDatabase.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.ServiceUser;
import com.service.serviceDentalDatabase.repo.ServiceRepo;





@Service
public class RegistrationService {
	
	@Autowired
	private ServiceRepo repo;
	public ServiceUser saveUser(ServiceUser user) {
		return repo.save(user);
	}
	
	public ServiceUser fetchUserByAadhar(String aadhar)
	{
		return repo.findByAadhar(aadhar);
	}
	
 
	
	
	

}
