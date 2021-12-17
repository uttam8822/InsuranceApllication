//User Signup Controller
package com.service.serviceDentalDatabase.controller;

import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.Base64.Encoder;
import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
		String password = user.getPassword();
		Encoder encoder = Base64.getEncoder();
		String encodedPassword = encoder.encodeToString(password.getBytes());
		user.setPassword(encodedPassword);
		if(tempEmailId != null && !"".equals(tempEmailId))
        {
	     Registration userobj=service.fetchUserByEmailId(tempEmailId);
	     if(userobj != null) {
	    	 throw new Exception("user with" +tempEmailId + "id already exist");
	     }
        }
		int a = (int)(Math.random()*(99999999-11111111+1)+11111111);
		user.setOtpOfUser(a);
		System.out.println(a);
		Registration userObj=null;
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
		Encoder encoder = Base64.getEncoder();
		String encodedPassword = encoder.encodeToString(tempPass.getBytes());
		
		Registration userobj = null;
		if(tempEmailId != null && tempPass != null)
		{
			userobj =service.fetchUserByEmailIdAndPassword(tempEmailId, encodedPassword);
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
	

	
	@GetMapping("/getuser/{email}")                   //Getting Application Data by Adhaar
	@CrossOrigin(origins="*")
	public Registration getUser(@PathVariable String email){
		Registration obj=service.fetchUserByEmailId(email);
		return obj;
		//return repo.findAll().stream().filter(t-> email.equals(t.getEmailId())).findFirst().orElse(null);
	}
	
	
	@PostMapping("/sendmailOTP") //Mapping for Sending Email in Forget Password
	@CrossOrigin(origins="http://localhost:4200")
	public void triggerMailOTP(@RequestBody Registration user) throws MessagingException {
	String tempEmailId = user.getEmailId();
	System.out.println(tempEmailId);
	String email=tempEmailId;
	if(tempEmailId == null) {
	throw new MessagingException("Bad credentials");
	}
	if(tempEmailId != null && !"".equals(tempEmailId))
	{
	Registration userobj= service.fetchUserByEmailId(tempEmailId); //Checking Existing EmailId
	if(userobj != null) {
	//Sending Message
	service1.sendSimpleEmail(email,"Dear User,\nyour One Time Password (OTP) is "+userobj.getOtpOfUser()

	+ ". have any issue please contact us at the address given below"+"\n\n\n\nThank You!"
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
	
	
	
	// verfy OTP of user
	@PostMapping("/verifyOTPOfUser123") //Mapping for Sending Email in Forget Password
	@CrossOrigin(origins="http://localhost:4200")
	public Registration verifyOTPOfUser(@RequestBody Registration user) throws Exception {
	int tempOTP = user.getOtpOfUser();
	String tempEmailId = user.getEmailId();
	System.out.println(tempOTP);
	Registration userobj = null;
	if(tempOTP != 0 && tempEmailId != null)
	{
	userobj =service.fetchUserByOtp(tempOTP,tempEmailId);
	}
	if(userobj ==null)
	{
	throw new Exception("Bad credentials");
	}
	return userobj;
	}

	 @PutMapping("/update")
	  @CrossOrigin("*")
	  public Registration updatePassword(@RequestParam String pass,@RequestParam String email, @RequestParam Integer token)throws Exception {
		  Registration userObj=null;
		  Registration user=service.fetchUserByOtp(token, email);
		  if(user==null)
			  throw new Exception("Error");
		  
		  else if(user!=null) {
			  //user.setOtpOfUser(0);
			  Encoder encoder = Base64.getEncoder();
				String encodedPassword = encoder.encodeToString(pass.getBytes());
			  user.setPassword(encodedPassword);
			  userObj=service.saveUser(user);
			  service1.sendSimpleEmail(email,"Dear User, your password changed successfully"

				+ ". have any issue please contact us at the address given below"+"\n\n\n\nThank You!"
				+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd. \nSDF No. K-13 to 16, NSEZ\nPhase-II Noida-201305 (U.P.)"
				+ "\nPhone " +
				"+91-120-4018100"+"\nEmail : support@impetus.com"
				, "Request for password reset");
			  
		  }
		  return userObj; 
	  }
}
