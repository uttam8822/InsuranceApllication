package com.service.serviceDentalDatabase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.Registration;
import com.service.serviceDentalDatabase.model.UWUser;
import com.service.serviceDentalDatabase.repo.UWRepo;
import com.service.serviceDentalDatabase.service.UWService;

 

 
@RestController
public class UWController {
	
	@Autowired
	private UWService service;
	@Autowired
	private UWRepo repo;
	
	@PostMapping("/createUW")
	@CrossOrigin(origins="http://localhost:4200")
	public UWUser resisterUserService(@RequestBody UWUser user) throws Exception {

		/*String tempEmail=user.getEmailId();
		String tempId=user.getWriterId();
		if(tempEmail != null && !"".equals(tempEmail)) {
			UWUser userObj=service.fetchByEmail(tempEmail);
			if(userObj!=null) throw new Exception ("Email Id "+tempEmail+"already exist");
		}
		if(tempId!=null && !"".equals(tempId)) {
		UWUser userObj=service.fetchById(tempId);
		if(userObj!=null) throw new Exception ("EmailId"+tempId+"already Exist");
		}*/
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
	
}
