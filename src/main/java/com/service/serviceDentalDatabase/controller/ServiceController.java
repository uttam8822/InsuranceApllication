//Dental User Controller
package com.service.serviceDentalDatabase.controller;

import java.util.List;
import java.util.stream.Stream;

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
    
    /*
	  This is a service for applying dental service.
	  @Parameter=/registeruserservice ==>this is used as an URL for hitting this service.
	  @Auther=Uttam Kumar Singh.
	 */
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
	        	user.setStatus("Approved");
	        	userObj = service.saveUser(user);                          //Saving Application data with Approval
	        	System.out.println(userObj.getEmail());
	        	service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+user.getFirstName()+"\nYour application has been approved for Dental service"+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
	    				"\nPhone : " + 
	    				"+91-120-4018100"+"\nEmail : support@impetus.com"
	    		,"Application Approved");
	        }
	        else {
			userObj = service.saveUser(user);
			service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+user.getFirstName()+"\nYour application has been received successfully for Dental Insurance, we will contact you soon after reviewing your application."+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
    				"\nPhone : " + 
    				"+91-120-4018100"+"\nEmail : support@impetus.com"
    		,"Application Received ");
	        }
		
		return userObj;
	}
	/*
	  This is a service for send an email when application will be approved 
	  @Parameter=//status1d/{aadhar} ==>this is used as an URL for hitting this service
	  @Auther=Ambikesh Mishra
	 */
	@PutMapping("/status1d/{aadhar}")                             //Mapping for Approval
	@CrossOrigin(origins = "http://localhost:4200")
	public ServiceUser updateStatus(@RequestBody ServiceUser user)throws Exception{
		user.setStatus("Rejected");
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
	
	/*
	  This is a service for send an email when application will be rejected.
	  @Parameter=//statusd/{aadhar} ==>this is used as an URL for hitting this service.
	  @Auther=Ambikesh Mishra.
	 */
	@PutMapping("/statusd/{aadhar}")                            // Mapping for Rejection
	@CrossOrigin(origins = "http://localhost:4200")
	public ServiceUser updateStatus2(@RequestBody ServiceUser user)throws Exception{
		user.setStatus("Approved");
		ServiceUser userObj;
		
		userObj=service.saveUser(user);		
		service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+userObj.getFirstName()+"\nYour application has been approved for Dental Service"+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
				"\nPhone : " + 
				"+91-120-4018100"+"\nEmail : support@impetus.com"
		,"Application Approved");
		return userObj;
	    
	}
	/*
	  This is a service for get all data of application.
	  @Parameter=/getdentaldata{aadhar} ==>this is used as an URL for hitting this service.
	  @Auther=Uttam Kumar Singh
	 */
	@GetMapping("/getdentaldata{aadhar}")                               //Getting Dental Data Application
	@CrossOrigin(origins="http://localhost:4200")
	List<ServiceUser> getUser(){
		return repo.findAll();
	}
	
	/*
	  This is a service for get data of single user by id of application.
	  @Parameter=/getdentaldatabyID/{aadhar} ==>this is used as an URL for hitting this service.
	  @Auther=Uttam Kumar Singh.
	 */
	@GetMapping("/getdentaldatabyID/{aadhar}")                         //Getting Dental Application data with adhaar
	@CrossOrigin(origins="http://localhost:4200")
	public ServiceUser getUser(@PathVariable String aadhar){
		return repo.findAll().stream().filter(t-> aadhar.equals(t.getAadhar())).findFirst().orElse(null);
	}
	
	@GetMapping("/getdentaldatabymail/{email}")                   //Getting Application Data by Adhaar
	@CrossOrigin(origins="http://localhost:4200")
	public Stream<ServiceUser> getDetails(@PathVariable String email){
		//LifeUser obj=service.fetchByEmail(email);
		//System.out.println(obj);
		return repo.findAll().stream().filter(t-> email.equals(t.getEmail()));
	}
	
	@GetMapping("/getdentaldatacount")                               //Getting Application Data
	@CrossOrigin(origins="http://localhost:4200")
	long getUserLife(){
		return repo.count();
	}

}
