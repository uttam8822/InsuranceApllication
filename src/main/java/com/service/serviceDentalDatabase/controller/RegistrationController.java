package com.service.serviceDentalDatabase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.Registration;
import com.service.serviceDentalDatabase.service.RegistrationUserService;

@RestController
public class RegistrationController {
	
	
	@Autowired
	private RegistrationUserService service;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:4200")
	public Registration registerUser(@RequestBody Registration user) throws Exception
	{
		String tempEmailId = user.getEmailId();
		if(tempEmailId != null && !"".equals(tempEmailId))
        {
	     Registration userobj=service.fetchUserByEmailId(tempEmailId);
	     if(userobj != null) {
	    	 throw new Exception("user with" +tempEmailId + "id already exist");
	     }
        }
		Registration userObj = null;
		userObj = service.saveUser(user);
		return userObj;	
	}
	
	
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public Registration loginUser(@RequestBody Registration user)throws Exception
	{
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		Registration userobj = null;
		if(tempEmailId != null && tempPass != null)
		{
			userobj =service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(userobj ==null) 
		{
			throw new Exception("Bad credentials");
		}
		
		return userobj;
	}
	
	

}
