//Login Service for User
package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.Registration;
import com.service.serviceDentalDatabase.repo.RegistrationRepository;

@Service
public class RegistrationUserService
{
	//Wiring
	@Autowired
	private RegistrationRepository repo;
	//Fetching Data
	public Registration saveUser(Registration user) {
	    return	repo.save(user);
		
	}
	
	public Registration fetchUserByEmailId(String email)
	{
		return repo.findByEmailId(email);
	}
	
	
	public Registration fetchUserByEmailIdAndPassword(String email, String password)
	{
		return repo.findByEmailIdAndPassword(email, password);
	}
	
	public Registration fetchUserByOtp(int otp,String email)
	{
	return repo.findByotpOfUserAndEmailId(otp, email);
	}
}

