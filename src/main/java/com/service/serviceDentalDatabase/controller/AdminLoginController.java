// Controller Class for Admin Activity
package com.service.serviceDentalDatabase.controller;
import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
		if(tempEmail != null && !"".equals(tempEmail)) {
		Admin userObj=service.fetchByEmail(tempEmail);
		if(userObj!=null) throw new Exception ("Email Id "+tempEmail+"already exist");
		}
		if(tempId!=null && !"".equals(tempId)) {
		Admin userObj=service.fetchByAdminId(tempId);
		if(userObj!=null) throw new Exception ("Id"+tempId+"already Exist");
		}
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
	Admin adminObj = null;
	if(tempAdminId != null && tempPassword != null) {
	adminObj = service.fetchByAdminIdAndPassword(tempAdminId,tempPassword);
	}
	if(adminObj == null) {
	throw new Exception ("Bad Credentials");
	}
	return adminObj;
	}	
	
	@PostMapping("/sendmailadmin") //Admin forget passowrd email
	@CrossOrigin(origins="http://localhost:4200")
	public void triggerMail(@RequestBody Admin user) throws MessagingException {
	String tempEmailId = user.getEmailId();
	if(tempEmailId == null) {
	throw new MessagingException("Bad credentials");
	}
	if(tempEmailId != null && !"".equals(tempEmailId))
	{
	Admin userobj= service.fetchByEmail(tempEmailId);
	if(userobj != null) {
	service1.sendSimpleEmail(tempEmailId,"Dear Admin,\nYour request for password reset has been sent successfully"
	+"\nYour emailId is : "+tempEmailId+"\nYour Name : "+userobj.getFullName()+"\nYour ID : "+userobj.getAdminId()+"\nYour new password is : "
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
