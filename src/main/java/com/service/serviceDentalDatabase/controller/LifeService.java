//Life Service Controller
package com.service.serviceDentalDatabase.controller;
import java.util.List;
import java.util.stream.Stream;

import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.repo.LifeRepo;
import com.service.serviceDentalDatabase.service.EmailSendService;
import com.service.serviceDentalDatabase.service.LifeRegistrationService;

@RestController                       //Controller
public class LifeService {
// Wiring
	@Autowired
	private LifeRegistrationService service;
	@Autowired
	private LifeRepo repo;
	
	@Autowired
	private EmailSendService service1;
	/*
	  This is a service for applying life service
	  @Parameter=/registerlifeservice ==>this is used as an URL for hitting this service
	  @Auther=Ambikesh Mishra
	 */
	@PostMapping("/registerlifeservice")                   // Mapping for Application Submission
	@CrossOrigin(origins = "http://localhost:4200")
	public LifeUser registerLifeService(@RequestBody LifeUser user) throws Exception {
        String tempAadhar=user.getAadhar();
        String tempEmail=user.getEmail();
        //Checking Error for null Values
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
		LifeUser userObj = null;                                                 //Creating Object
		
		//Checking Exsiting Application
        if(tempAadhar != null && !"".equals(tempAadhar))
        {
	     LifeUser userobj=service.fetchUserByAadhar(tempAadhar);
	     if(userobj != null) {
	    	 throw new Exception("user with" +tempAadhar + "id already exist");
	     }
        }
        System.out.println(user.getStatus());
        //Auto Approval
        if("No".equals(user.getTobacco()) && "No".equals(user.getLungsIssue()) && "No".equals(user.getHivIssue())) {
        	user.setStatus("Approved");
        	userObj = service.saveUser(user);
        	System.out.println(userObj.getEmail());
        	service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+user.getFirstName()+"\nYour application has been approved for Life service"+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
    				"\nPhone : " + 
    				"+91-120-4018100"+"\nEmail : support@impetus.com"
    		,"Application Approved");
        }
        else {
		//LifeUser userObj = null;
		userObj = service.saveUser(user);
		service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+user.getFirstName()+"\nYour application has been received successfully  Life Insurance, we will contact you soon after reviewing your application."+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
				"\nPhone : " + 
				"+91-120-4018100"+"\nEmail : support@impetus.com"
		,"Application Received ");
        }
		return userObj;
	}
	/*
	  This is a service for send an email when application will be approved 
	  @Parameter=//status/{aadhar} ==>this is used as an URL for hitting this service
	  @Auther=Uttam kumar singh
	 */
	@PutMapping("/status/{aadhar}")                                  //Mapping for Approval
	@CrossOrigin(origins = "http://localhost:4200")
	public LifeUser updateStatus(@RequestBody LifeUser user)throws Exception{
		user.setStatus("Approved");
		LifeUser userObj;
		
		userObj=service.saveUser(user);	
		service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+userObj.getFirstName()+"\nYour application has been approved for Life service"+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
				"\nPhone : " + 
				"+91-120-4018100"+"\nEmail : support@impetus.com"
		,"Application Approved");
				
		return userObj;
		
}
	    
	/*
	  This is a service for send an email when application will be rejected.
	  @Parameter=//statusdv/{aadhar} ==>this is used as an URL for hitting this service.
	  @Auther=Ambikesh Mishra
	 */
	@PutMapping("/status1/{aadhar}")                                    // Mapping for Rejection
	@CrossOrigin(origins = "http://localhost:4200")
	public LifeUser updateStatus1(@RequestBody LifeUser user)throws Exception{
		user.setStatus("Rejected");
		String tempReason=user.getReason();
		user.setReason(tempReason);
		
		LifeUser userObj;
		userObj=service.saveUser(user);		
		service1.sendSimpleEmail(userObj.getEmail(),"Dear User, "+userObj.getFirstName()+"\nYour application has been rejected for Life service because of"+user.getReason()+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
				"\nPhone : " + 
				"+91-120-4018100"+"\nEmail : support@impetus.com"
		,"Application Rejected");
		
	return userObj;
	    
	}
	
	/*
	  This is a service for get all data of application.
	  @Parameter=/getlifedata ==>this is used as an URL for hitting this service.
	  @Auther=Uttam Kumar Singh
	 */
	@GetMapping("/getlifedata")                               //Getting Application Data
	@CrossOrigin(origins="http://localhost:4200")
	List<LifeUser> getUser(){
		return repo.findAll();
	}
	
	/*
	  This is a service for get data of single user by id of application.
	  @Parameter=/getlifedatabyID/{aadhar} ==>this is used as an URL for hitting this service.
	  @Auther=Ambikesh Mishra
	 */
	@GetMapping("/getlifedatabyID/{aadhar}")                   //Getting Application Data by Adhaar
	@CrossOrigin(origins="http://localhost:4200")
	public LifeUser getUser(@PathVariable String aadhar){
		return repo.findAll().stream().filter(t-> aadhar.equals(t.getAadhar())).findFirst().orElse(null);
	}
	
	@GetMapping("/getlifedatabymail/{email}")                   //Getting Application Data by Adhaar
	@CrossOrigin(origins="http://localhost:4200")
	public Stream<LifeUser> getDetails(@PathVariable String email){
		//LifeUser obj=service.fetchByEmail(email);
		//System.out.println(obj);
		return repo.findAll().stream().filter(t-> email.equals(t.getEmail()));
	}
	
	@GetMapping("/getlifedatacount")                               //Getting Application Data
	@CrossOrigin(origins="http://localhost:4200")
	long getUserLife(){
		return repo.count();
	}
	
		
	
}
