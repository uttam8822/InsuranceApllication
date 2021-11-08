package com.service.serviceDentalDatabase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.repo.DentalVisionRepo;
import com.service.serviceDentalDatabase.service.DentalVisionRegistration;
import com.service.serviceDentalDatabase.service.EmailSendService;

@RestController
public class DentalVisionService {

	@Autowired
	private DentalVisionRegistration service;
    @Autowired
    private DentalVisionRepo repo;
	@Autowired
	private EmailSendService service1;
	
	@PostMapping("/registerdentalvisionservice")
	@CrossOrigin(origins = "http://localhost:4200")
	public DentalVisionUser resisterUserService(@RequestBody DentalVisionUser user) throws Exception {
		 String tempAadhar=user.getAadhar();
		if(user.getFirstName()==null)
			throw new Exception("Error");
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
		if(user.getCancellingInsurance()==null) throw new Exception("Error");
		if(user.getAnyEyeDisease()==null) throw new Exception("Error");
		if(user.getGroupInsurance()==null) throw new Exception("Error");
		if(user.getTobacco()==null) throw new Exception("Error");
		if(user.getOralOperation()==null) throw new Exception("Error");
		if(user.getLastDentalCkeck()==null) throw new Exception("Error");
		if(user.getAnyCavity()==null) throw new Exception("Error");
		if(user.getWearGlasses()==null) throw new Exception("Error");
		if(user.getAnyEyeDisease()==null) throw new Exception("Error");
		if(user.getAnyEyeOperation()==null) throw new Exception("Error");
		DentalVisionUser userObj = null;
	        if(tempAadhar != null && !"".equals(tempAadhar))
	        {
		     DentalVisionUser userobj=service.fetchUserByAadhar(tempAadhar);
		     if(userobj != null) {
		    	 throw new Exception("user with" +tempAadhar + "id already exist");
		     }
	        }
	        if("No".equals(user.getAnyCavity()) && "No".equals(user.getOralOperation()) && "No".equals(user.getTobacco()) && "No".equals(user.getAnyEyeOperation())) {
	        	user.setStatus("Yes");
	        	userObj = service.saveUser(user);
	        	System.out.println(userObj.getEmail());
	        	service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+user.getFirstName()+"\nYour application has been approved for Life service"+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
	    				"\nPhone : " + 
	    				"+91-120-4018100"+"\nEmail : support@impetus.com"
	    		,"Application Approved");
	        }
	        else {
			userObj = service.saveUser(user);
	        }
		
		return userObj;
	}
	@PutMapping("/statusdv/{aadhar}")
	@CrossOrigin(origins = "http://localhost:4200")
	public DentalVisionUser updateStatus(@RequestBody DentalVisionUser user)throws Exception{
		user.setStatus("Yes");
		DentalVisionUser userObj;
		
		userObj=service.saveUser(user);		
		service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+userObj.getFirstName()+"\nYour application has been approved for Dental Vision service."+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
				"\nPhone : " + 
				"+91-120-4018100"+"\nEmail : support@impetus.com"
		,"Application Approved");
				
		return userObj;
	    
	}
	@PutMapping("/status1dv/{aadhar}")
	@CrossOrigin(origins = "http://localhost:4200")
	public DentalVisionUser updateStatus1(@RequestBody DentalVisionUser user)throws Exception{
		user.setStatus("No");
		String temp=user.getReason();
		user.setReason(temp);
		DentalVisionUser userObj;
		
		userObj=service.saveUser(user);		
		service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+userObj.getFirstName()+"\nYour application has been rejected for Life service because of"+user.getReason()+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
				"\nPhone : " + 
				"+91-120-4018100"+"\nEmail : support@impetus.com"
		,"Application Rejected");
		return userObj;
	    
	}
	@GetMapping("/getdentalvisiondata")
	@CrossOrigin(origins="http://localhost:4200")
	List<DentalVisionUser> getUser(){
		return repo.findAll();
	}
	
	@GetMapping("/getdvdatabyID/{aadhar}")
	@CrossOrigin(origins="http://localhost:4200")
	public DentalVisionUser getUser(@PathVariable String aadhar){
		return repo.findAll().stream().filter(t-> aadhar.equals(t.getAadhar())).findFirst().orElse(null);
	}
}
