// Controller Class for Admin Activity
package com.service.serviceDentalDatabase.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.Admin;
import com.service.serviceDentalDatabase.service.AdminLoginService;

@RestController //Controller Annotation
public class AdminLoginController {
	@Autowired                       //Wiring 
	private AdminLoginService service;
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
}
