package com.service.serviceDentalDatabase.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;
import com.service.serviceDentalDatabase.model.LifeUser;

public interface LifeRepo extends JpaRepository<LifeUser,Integer> {
	@Override
	List<LifeUser> findAll();
	
	//LifeUser findById(String aadhar);
}