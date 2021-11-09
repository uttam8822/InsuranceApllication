//Services for Admin for Fetching data using JPA repository
package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.Admin;
import com.service.serviceDentalDatabase.repo.AdminLoginRepo;

@Service
public class AdminLoginService {
	//Wiring
	@Autowired
	private AdminLoginRepo repo;
	//Fetching data
	public Admin fetchByAdminIdAndPassword(String adminId, String password) {
	return repo.findByAdminIdAndPassword(adminId, password);
	}
	@Autowired
	private AdminLoginRepo repo1;
	public Admin saveUser(Admin user) {
		return repo1.save(user);
	}
	@Autowired
	private AdminLoginRepo repo2;
	public Admin fetchByEmail(String emailId)
	{
		return repo2.findByEmail(emailId);
	}
	@Autowired
	private AdminLoginRepo repo3;
	public Admin fetchByAdminId(String  adminId) {
		return repo3.findByAdminId(adminId);
	}
}
