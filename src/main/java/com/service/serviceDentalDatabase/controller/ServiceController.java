//Dental User Controller
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

import com.service.serviceDentalDatabase.model.ServiceUser;
import com.service.serviceDentalDatabase.repo.ServiceRepo;
import com.service.serviceDentalDatabase.service.EmailSendService;
import com.service.serviceDentalDatabase.service.RegistrationService;

@RestController
public class ServiceController {
//Wiring
	@Autowired
	private RegistrationService service;
    @Autowired
    private ServiceRepo repo;
    @Autowired
	private EmailSendService service1;
    
    
	@PostMapping("/registeruserservice")          //Mapping for Saving Application Data 
	@CrossOrigin(origins = "http://localhost:4200")
	public ServiceUser resisterUserService(@RequestBody ServiceUser user) throws Exception {
		 String tempAadhar=user.getAadhar();
		 //Checking Value for null Values
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
			ServiceUser userObj = null;                                          //Object Creation
	        if(tempAadhar != null && !"".equals(tempAadhar))
	        {
		     ServiceUser userobj=service.fetchUserByAadhar(tempAadhar);         //Checking Existing Account
		     if(userobj != null) {
		    	 throw new Exception("user with" +tempAadhar + "id already exist");
		     }
	        }
	        
	        //Auto Approval
	        if("No".equals(user.getTobacco()) && "No".equals(user.getGroupInsurance()) && "No".equals(user.getCancellingInsurance())) {
	        	user.setStatus("Yes");
	        	userObj = service.saveUser(user);                          //Saving Application data with Approval
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
	@PutMapping("/status1d/{aadhar}")                             //Mapping for Approval
	@CrossOrigin(origins = "http://localhost:4200")
	public ServiceUser updateStatus(@RequestBody ServiceUser user)throws Exception{
		user.setStatus("No");
		String temp=user.getReason();
		user.setReason(temp);
		ServiceUser userObj;
		
		userObj=service.saveUser(user);		
		service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+userObj.getFirstName()+"\nYour application has been rejected for Dental Service because of"+user.getReason()+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
				"\nPhone : " + 
				"+91-120-4018100"+"\nEmail : support@impetus.com"
		,"Application Rejected");
		return userObj;
	}
	@PutMapping("/statusd/{aadhar}")                            // Mapping for Rejection
	@CrossOrigin(origins = "http://localhost:4200")
	public ServiceUser updateStatus2(@RequestBody ServiceUser user)throws Exception{
		user.setStatus("Yes");
		ServiceUser userObj;
		
		userObj=service.saveUser(user);		
		service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+userObj.getFirstName()+"\nYour application has been approved for Dental Service"+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
				"\nPhone : " + 
				"+91-120-4018100"+"\nEmail : support@impetus.com"
		,"Application Approved");
		return userObj;
	    
	}
	@GetMapping("/getdentaldata{aadhar}")                               //Getting Dental Data Application
	@CrossOrigin(origins="http://localhost:4200")
	List<ServiceUser> getUser(){
		return repo.findAll();
	}
	
	
	@GetMapping("/getdentaldatabyID/{aadhar}")                         //Getting Dental Application data with adhaar
	@CrossOrigin(origins="http://localhost:4200")
	public ServiceUser getUser(@PathVariable String aadhar){
		return repo.findAll().stream().filter(t-> aadhar.equals(t.getAadhar())).findFirst().orElse(null);
	}
	
	
	

}
