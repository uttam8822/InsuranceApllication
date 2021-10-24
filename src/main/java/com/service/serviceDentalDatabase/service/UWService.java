package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.UWUser;
import com.service.serviceDentalDatabase.repo.DentalVisionRepo;
import com.service.serviceDentalDatabase.repo.UWRepo;

 

@Service
public class UWService {
	@Autowired
	private UWRepo repo_2;
	public UWUser fetchByWriterIdAndPassword(String writerId, String password) {
		return repo_2.findByWriterIdAndPassword(writerId, password);
		}
	
	@Autowired
	private UWRepo repo;
	public UWUser saveUser(UWUser user) {
		return repo.save(user);
	}
}
