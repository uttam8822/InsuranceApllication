package com.service.serviceDentalDatabase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.UWUser;

import com.service.serviceDentalDatabase.service.UWService;

 

 
@RestController
public class UWController {
	
	@Autowired
	private UWService service;
	@PostMapping("/createUW")
	@CrossOrigin(origins="http://localhost:4200")
	public UWUser resisterUserService(@RequestBody UWUser user) throws Exception {
		
		
		UWUser userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	 
	@PostMapping("/uwlogin")
	@CrossOrigin(origins="http://localhost:4200")
	public UWUser loginwriter(@RequestBody UWUser writer) throws Exception {
	String tempWriterId = writer.getWriterId();
	String tempPassword = writer.getPassword();
	UWUser writerObj = null;
	if(tempWriterId != null && tempPassword != null) {
	writerObj = service.fetchByWriterIdAndPassword(tempWriterId,tempPassword);
	}
	if(writerObj != null) {
	throw new Exception ("Bad Credentials");
	}
	return writerObj;
	}

}
