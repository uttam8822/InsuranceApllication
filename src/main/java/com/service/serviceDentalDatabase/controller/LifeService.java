package com.service.serviceDentalDatabase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.model.ServiceUser;
import com.service.serviceDentalDatabase.repo.LifeRepo;
import com.service.serviceDentalDatabase.service.LifeRegistrationService;

@RestController
public class LifeService {

	@Autowired
	private LifeRegistrationService service;
	@Autowired
	private LifeRepo repo;

	@PostMapping("/registerlifeservice")
	@CrossOrigin(origins = "http://localhost:4200")
	public LifeUser registerLifeService(@RequestBody LifeUser user) throws Exception {
        String tempAadhar=user.getAadhar();
        if(tempAadhar != null && !"".equals(tempAadhar))
        {
	     LifeUser userobj=service.fetchUserByAadhar(tempAadhar);
	     if(userobj != null) {
	    	 throw new Exception("user with" +tempAadhar + "id already exist");
	     }
        }
		LifeUser userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	@PutMapping("/status/{aadhar}")
	@CrossOrigin(origins = "http://localhost:4200")
	public LifeUser updateStatus(@RequestBody LifeUser user)throws Exception{
		user.setStatus("Yes");
		LifeUser userObj;
		
		userObj=service.saveUser(user);		
		return userObj;
	    
	}
	@PutMapping("/status1/{aadhar}")
	@CrossOrigin(origins = "http://localhost:4200")
	public LifeUser updateStatus1(@RequestBody LifeUser user)throws Exception{
		user.setStatus("No");
		LifeUser userObj;
		
		userObj=service.saveUser(user);		
		return userObj;
	    
	}
	
	@GetMapping("/getlifedata")
	@CrossOrigin(origins="http://localhost:4200")
	List<LifeUser> getUser(){
		return repo.findAll();
	}
	

}
