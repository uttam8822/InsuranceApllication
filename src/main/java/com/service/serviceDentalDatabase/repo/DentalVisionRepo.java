//Jpa Repository for Database Connection 
package com.service.serviceDentalDatabase.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.model.ServiceUser;

public interface DentalVisionRepo extends JpaRepository<DentalVisionUser,String> {
	//methods for data fetching
	@Override
	List<DentalVisionUser> findAll();
	public DentalVisionUser findByAadhar(String aadhar);
	//public findByDetails(String gender,String)
}
