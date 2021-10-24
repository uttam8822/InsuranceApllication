package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.User;
import com.service.serviceDentalDatabase.repo.RegistrationRepository;

@Service
public class RegistrationUserService
{
	@Autowired
	private RegistrationRepository repo;
	public User saveUser(User user) {
	    return	repo.save(user);
		
	}
	
	public User fetchUserByEmailId(String email)
	{
		return repo.findByEmailId(email);
	}
	
	
	public User fetchUserByEmailIdAndPassword(String email, String password)
	{
		return repo.findByEmailIdAndPassword(email, password);
	}


}

