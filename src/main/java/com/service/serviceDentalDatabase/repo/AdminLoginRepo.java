package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.Admin;



public interface AdminLoginRepo extends JpaRepository<Admin,Integer> {
    
	Admin findByAdminIdAndPassword(String adminId, String password);
}
