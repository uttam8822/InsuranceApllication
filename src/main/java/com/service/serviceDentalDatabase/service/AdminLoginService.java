package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.Admin;
import com.service.serviceDentalDatabase.model.UWUser;
import com.service.serviceDentalDatabase.repo.AdminLoginRepo;
import com.service.serviceDentalDatabase.repo.UWRepo;

 
@Service
public class AdminLoginService {
	@Autowired
	private AdminLoginRepo repo_1;
	 
	public Admin fetchByAdminIdAndPassword(String adminId, String password) {
	return repo_1.findByAdminIdAndPassword(adminId, password);
	}
	 
	@Autowired
	private AdminLoginRepo repo;
	public Admin saveUser(Admin user) {
		return repo.save(user);
	}
	

}
