package com.service.serviceDentalDatabase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.service.serviceDentalDatabase.model.ServiceUser;
import com.service.serviceDentalDatabase.repo.ServiceRepo;
import com.service.serviceDentalDatabase.service.RegistrationService;

//submit method when user submit
@RestController
public class ServiceController {

	@Autowired
	private RegistrationService service;
    @Autowired
    private ServiceRepo repo;
	@PostMapping("/registeruserservice")
	@CrossOrigin(origins = "http://localhost:4200")
	public ServiceUser resisterUserService(@RequestBody ServiceUser user) throws Exception {
		 String tempAadhar=user.getAadhar();
	        if(tempAadhar != null && !"".equals(tempAadhar))
	        {
		     ServiceUser userobj=service.fetchUserByAadhar(tempAadhar);
		     if(userobj != null) {
		    	 throw new Exception("user with" +tempAadhar + "id already exist");
		     }
	        }
		ServiceUser userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	@PutMapping("/status1d/{aadhar}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ServiceUser updateStatus(@RequestBody ServiceUser user)throws Exception{
		user.setStatus("No");
		ServiceUser userObj;
		
		userObj=service.saveUser(user);			
		return userObj;
	}
	@PutMapping("/statusd/{aadhar}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ServiceUser updateStatus2(@RequestBody ServiceUser user)throws Exception{
		user.setStatus("Yes");
		ServiceUser userObj;
		
		userObj=service.saveUser(user);			
		return userObj;
	    
	}
	@GetMapping("/getdentaldata{aadhar}")
	@CrossOrigin(origins="http://localhost:4200")
	List<ServiceUser> getUser(){
		return repo.findAll();
	}
	

}
