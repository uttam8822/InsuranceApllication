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
        if(user.getLastName()==null) throw new Exception("Error");	
		if(user.getEmail()==null) throw new Exception("Error");	
		if(user.getPan()==null) throw new Exception("Error");	
		if(user.getAddress()==null) throw new Exception("Error");	
		if(user.getZip()==null) throw new Exception("Error");	
		if(user.getCity()==null) throw new Exception("Error");	
		if(user.getState()==null) throw new Exception("Error");	
		if(user.getContact()==null) throw new Exception("Error");	
		if(user.getDateOfBirth()==null) throw new Exception("Error");	
		if(user.getOccupation()==null) throw new Exception("Error");	
		if(user.getIncome()==null) throw new Exception("Error");	
		if(user.getGender()==null) throw new Exception("Error");
		if(user.getMember()==null) throw new Exception("Error");
		if(user.getSelectPlane()==null) throw new Exception("Error");
		if(user.getTobacco()==null) throw new Exception("Error");
		if(user.getGroupInsurance()==null) throw new Exception("Error");
		if(user.getCancellingInsurance()==null) throw new Exception("Error");
		if(user.getHivIssue()==null) throw new Exception("Error");
		if(user.getLungsIssue()==null) throw new Exception("Error");
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
