package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.Admin;
import com.service.serviceDentalDatabase.repo.AdminLoginRepo;

 
@Service
public class AdminLoginService {
	@Autowired
	private AdminLoginRepo repo;
	 
	public Admin fetchByAdminIdAndPassword(String adminId, String password) {
	return repo.findByAdminIdAndPassword(adminId, password);
	}
	@Autowired
	private AdminLoginRepo repo1;
	public Admin saveUser(Admin user) {
		return repo1.save(user);
	}
/*	@Autowired
	private AdminLoginRepo repo2;
	public Admin fetchByEmail(String emailId)
	{
		return repo2.findByEmail(emailId);
	}
	@Autowired
	private AdminLoginRepo repo3;
	public Admin fetchById(String Id) {
		return repo3.findById(Id);
	}
*/
}
