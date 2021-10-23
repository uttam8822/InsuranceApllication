package com.service.serviceDentalDatabase.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.ServiceUser;


public interface ServiceRepo extends JpaRepository<ServiceUser,String>{
	
	@Override
	List<ServiceUser> findAll();
}
