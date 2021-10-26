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
		 if(user.getLastName()==null) throw new Exception("NError");	
			if(user.getEmail()==null) throw new Exception("eError");	
			if(user.getPan()==null) throw new Exception("PError");	
			if(user.getAddress()==null) throw new Exception("AError");	
			if(user.getZip()==null) throw new Exception("ZError");	
			if(user.getCity()==null) throw new Exception("CError");	
			if(user.getState()==null) throw new Exception("SError");	
			if(user.getContact()==null) throw new Exception("CError");	
			if(user.getDateOfBirth()==null) throw new Exception("DOBError");	
			if(user.getOccupation()==null) throw new Exception("OError");	
			if(user.getIncome()==null) throw new Exception("IError");	
			if(user.getGender()==null) throw new Exception("GError");
			if(user.getSelectPlane()==null) throw new Exception("SPError");
			if(user.getMember()==null) throw new Exception("MError");
			if(user.getCancellingInsurance()==null) throw new Exception("CIError");
			if(user.getGroupInsurance()==null) throw new Exception("GIError");
			if(user.getTobacco()==null) throw new Exception("TError");
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
