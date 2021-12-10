//UnderWriter Services
package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.Admin;
import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.UWUser;
import com.service.serviceDentalDatabase.repo.DentalVisionRepo;
import com.service.serviceDentalDatabase.repo.UWRepo;

@Service
public class UWService {
	//Wiring
	@Autowired
	private UWRepo repo;
	
	public UWUser fetchByWriterIdAndPassword(String writerId, String password) {
		return repo.findByWriterIdAndPassword(writerId, password);
		}
	
	public UWUser saveUser(UWUser user) {
		return repo.save(user);
	}
	public UWUser fetchByEmailId(String emailId)
	{
		return repo.findByEmailId(emailId);
	} 
	public UWUser fetchByWriterId(String Id) {
		return repo.findByWriterId(Id);
	}
	public UWUser fetchUserByOtp(int otp,String emailId)
	{
	return repo.findByotpOfUserAndEmailId(otp, emailId);
	}

}
