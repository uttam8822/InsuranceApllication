//UnderWriter Controller
package com.service.serviceDentalDatabase.controller;

import java.util.List;
import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.service.serviceDentalDatabase.model.UWUser;
import com.service.serviceDentalDatabase.repo.UWRepo;
import com.service.serviceDentalDatabase.service.EmailSendService;
import com.service.serviceDentalDatabase.service.UWService;

@RestController
public class UWController {
	//Wiring
	@Autowired
	private UWService service;
	@Autowired
	private UWRepo repo;
	@Autowired
	private EmailSendService service1;
	
	/*
	  This is a service for create under writer by admin.
	  @Parameter=/createUW ==>this is used as an URL for hitting this service.
	  @Auther=Ambikesh Mishra
	 */
	@PostMapping("/createUW")                                 //Creating UnderWriter
	@CrossOrigin(origins="http://localhost:4200")
	public UWUser resisterUserService(@RequestBody UWUser user) throws Exception {

		String tempEmail=user.getEmailId();
		String tempId=user.getWriterId();
	    if(tempEmail != null && !"".equals(tempEmail)) {
			UWUser userObj=service.fetchByEmail(tempEmail);
			if(userObj!=null) throw new Exception ("Email Id "+tempEmail+"already exist");
		}              
		if(tempId!=null && !"".equals(tempId)) {
		UWUser userObj=service.fetchByWriterId(tempId);
		if(userObj!=null) throw new Exception ("Id"+tempId+"already Exist");
		}
		UWUser userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	/*
	  This is a service for login under writer
	  @Parameter=/uwlogin ==>this is used as an URL for hitting this service.
	  @Auther=Ambikesh Mishra
	 */
	@PostMapping("/uwlogin")                                 //UnderWriter Login Mapping
	@CrossOrigin(origins="http://localhost:4200")
	public UWUser loginwriter(@RequestBody UWUser writer) throws Exception {
	String tempWriterId = writer.getWriterId();
	String tempPassword = writer.getPassword();
	UWUser writerObj = null;
	if(tempWriterId != null && tempPassword != null) {
	writerObj = service.fetchByWriterIdAndPassword(tempWriterId,tempPassword);
	}
	if(writerObj == null) {
	throw new Exception ("Bad Credentials");
	}
	return writerObj;
	}
	@GetMapping("/uwdetails")
	@CrossOrigin(origins="http://localhost:4200")
	List<UWUser> getuser(){
		return (List<UWUser>) repo.findAll();
		}
	
	/*
	  This is a service for send an email to under writer at the time of password reset.
	  @Parameter=/sendmailUW ==>this is used as an URL for hitting this service.
	  @Auther=Ambikesh Mishra
	 */
	
	@PostMapping("/sendmailUW")                                             //UnderWriter forget passowrd email
	@CrossOrigin(origins="http://localhost:4200")
	public void triggerMail(@RequestBody UWUser user) throws MessagingException {
	String tempEmailId = user.getEmailId();
	if(tempEmailId == null) {
	throw new MessagingException("Bad credentials");
	}
	if(tempEmailId != null && !"".equals(tempEmailId))
	{
		UWUser userobj= service.fetchByEmail(tempEmailId);
	if(userobj != null) {
	service1.sendSimpleEmail(tempEmailId,"Dear Under Writer,\nYour request for password reset has been sent successfully"
	+"\nYour emailId is : "+tempEmailId+"\nYour Name : "+userobj.getFullName()+"\nYour ID : "+userobj.getWriterId()+"\nYour password is : "
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
