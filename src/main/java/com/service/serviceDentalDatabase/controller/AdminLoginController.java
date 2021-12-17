// Controller Class for Admin Activity
package com.service.serviceDentalDatabase.controller;
import java.util.Base64;
import java.util.Base64.Encoder;

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

import com.service.serviceDentalDatabase.model.Admin;
import com.service.serviceDentalDatabase.service.AdminLoginService;
import com.service.serviceDentalDatabase.service.EmailSendService;

@RestController //Controller Annotation
public class AdminLoginController {
	@Autowired                       //Wiring 
	private AdminLoginService service;
	@Autowired
	private EmailSendService service1;
	 /*
	  This is a service of create admin 
	  @Parameter=/createadmin ==>this is used as an URL for hitting this service
	  @Auther=Uttam kumar singh
	 */
	@PostMapping("/createadmin")              //Mapping for Creation Admin
	@CrossOrigin(origins="http://localhost:4200") // Cross Origin
	public Admin resisterUserService(@RequestBody Admin user) throws Exception {
		
	    String tempEmail=user.getEmailId();
		String tempId=user.getAdminId();
		String password = user.getPassword();
		Encoder encoder = Base64.getEncoder();
		String encodedPassword = encoder.encodeToString(password.getBytes());
		user.setPassword(encodedPassword);
		if(tempEmail != null && !"".equals(tempEmail)) {
		Admin userObj=service.fetchByEmail(tempEmail);
		if(userObj!=null) throw new Exception ("Email Id "+tempEmail+"already exist");
		}
		if(tempId!=null && !"".equals(tempId)) {
		Admin userObj=service.fetchByAdminId(tempId);
		if(userObj!=null) throw new Exception ("Id"+tempId+"already Exist");
		}
		int a = (int)(Math.random()*(99999999-11111111+1)+11111111);
		user.setOtpOfUser(a);
		Admin userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	 /*
	  This is a service of login admin 
	  @Parameter=/adlogin ==>this is used as an URL for hitting this service
	  @Auther=Ambikesh Mishra
	 */
	@PostMapping("/adlogin")                       // Mapping for Admin Login
	@CrossOrigin(origins = "http://localhost:4200")
	public Admin loginAdmin(@RequestBody Admin admin) throws Exception {
	String tempAdminId = admin.getAdminId();
	String tempPassword = admin.getPassword();
	Encoder encoder = Base64.getEncoder();
	String encodedPassword = encoder.encodeToString(tempPassword.getBytes());
	 
	Admin adminObj = null;
	if(tempAdminId != null && tempPassword != null) {
	adminObj = service.fetchByAdminIdAndPassword(tempAdminId,encodedPassword);
	}
	if(adminObj == null) {
	throw new Exception ("Bad Credentials");
	}
	return adminObj;
	}	
	
	@GetMapping("/getuserad/{id}")                   //Getting Application Data by Adhaar
	@CrossOrigin(origins="*")
	public Admin getUser(@PathVariable String id){
		Admin obj=service.fetchByAdminId(id);
		return obj;
		//return repo.findAll().stream().filter(t-> email.equals(t.getEmailId())).findFirst().orElse(null);
	}
	
	
	@PostMapping("/sendmailOTP1") //Mapping for Sending Email in Forget Password
	@CrossOrigin(origins="http://localhost:4200")
	public void triggerMailOTP(@RequestBody Admin user) throws MessagingException {
		String tempEmailId = user.getEmailId();
	System.out.println(tempEmailId);
	String email=tempEmailId;
	if(tempEmailId == null) {
	throw new MessagingException("Bad credentials");
	}
	if(tempEmailId != null && !"".equals(tempEmailId))
	{
	Admin userobj= service.fetchByEmail(tempEmailId); //Checking Existing EmailId
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
	@PostMapping("/verifyOTPOfUser1234") //Mapping for Sending Email in Forget Password
	@CrossOrigin(origins="http://localhost:4200")
	public Admin verifyOTPOfUser(@RequestBody Admin user) throws Exception {
	int tempOTP = user.getOtpOfUser();
	String tempEmailId = user.getEmailId();
	System.out.println(tempOTP);
	Admin userobj = null;
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

	 @PutMapping("/update1")
	  @CrossOrigin("*")
	  public Admin updatePassword(@RequestParam String pass,@RequestParam String email, @RequestParam Integer token)throws Exception {
		  Admin userObj=null;
		  Admin user=service.fetchUserByOtp(token, email);
		  if(user==null)
			  throw new Exception("Error");
		  
		  else if(user!=null) {
			  //user.setOtpOfUser(0);
			    Encoder encoder = Base64.getEncoder();
				String encodedPassword = encoder.encodeToString(pass.getBytes());
			  user.setPassword(encodedPassword);
			  userObj=service.saveUser(user);
			  
		  }
		  return userObj; 
	  }
}

