//User Signup Controller
package com.service.serviceDentalDatabase.controller;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.Registration;
import com.service.serviceDentalDatabase.repo.RegistrationRepository;
import com.service.serviceDentalDatabase.service.EmailSendService;
import com.service.serviceDentalDatabase.service.RegistrationUserService;

@RestController
public class RegistrationController {
	
	//Wiring
	@Autowired
	private RegistrationUserService service;
	@Autowired
	private RegistrationRepository repo;
	@Autowired
	private EmailSendService service1;
	
	/*
	  This is a service sign up user.
	  @Parameter=/registeruser ==>this is used as an URL for hitting this service.
	  @Auther=uttam Kumar Singh.
	 */
	@PostMapping("/registeruser")                            //Saving User Details
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
	
	
	/*
	  This is a service sign in user.
	  @Parameter=/login ==>this is used as an URL for hitting this service.
	  @Auther=uttam Kumar Singh.
	 */
	
	@PostMapping("/login")                                 //Mapping for User Login
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
	/*
	  This is a service for get all register user data.
	  @Parameter=/userdetails ==>this is used as an URL for hitting this service.
	  @Auther=Ambikesh Mishra
	 */
	@GetMapping("/userdetails")                       //Mapping for Getting user Details
	@CrossOrigin(origins="http://localhost:4200")
	List<Registration> getuser(){
	return repo.findAll();
	
	}
	
	/*
	  This is a service for send an email at the time of password reset.
	  @Parameter=/sendmail ==>this is used as an URL for hitting this service.
	  @Auther=Uttam Kumar Singh
	 */
	
	@PostMapping("/sendmail")                //Mapping for Sending Email in Forget Password
	@CrossOrigin(origins="http://localhost:4200")
	public void triggerMail(@RequestBody Registration user) throws MessagingException {
	String tempEmailId = user.getEmailId();
	if(tempEmailId == null) {
	throw new MessagingException("Bad credentials");
	}
	if(tempEmailId != null && !"".equals(tempEmailId))
	{
	Registration userobj= service.fetchUserByEmailId(tempEmailId);          //Checking Existing EmailId
	if(userobj != null) {
		//Sending Message
	service1.sendSimpleEmail(tempEmailId,"Dear User,\nYour request for password reset has been sent successfully"
	+"\nYour emailId is : "+tempEmailId+"\nYour Name : "+userobj.getFirstName()+" "+userobj.getLastName()+"\nYour new password is : "
	+userobj.getPassword()+"\n\nWe request you please do not share your credentials.In case if you "
	+ "have any issue please contact us at the address given below"+"\n\n\n\nThank You!"
	+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd. \nSDF No. K-13 to 16, NSEZ\nPhase-II Noida-201305 (U.P.)"
	+ "\nPhone " +
	"+91-120-4018100"+"\nEmail : support@impetus.com"
	, "Request for password reset");
	}
	if(userobj ==null)
	{
	throw new MessagingException("Bad credentials");
	}
	}else {
	throw new MessagingException("Bad credentials");
	}
	}

	
}
