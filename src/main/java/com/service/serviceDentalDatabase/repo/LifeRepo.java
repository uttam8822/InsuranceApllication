//Jpa Repository for Database Connection 
package com.service.serviceDentalDatabase.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.LifeUser;


public interface LifeRepo extends JpaRepository<LifeUser,Integer> {
	//Methods for Data Fetching
	@Override
	List<LifeUser> findAll();
	
	public LifeUser findByAadhar(String aadhar);
	
	public LifeUser findByEmail(String email);

}