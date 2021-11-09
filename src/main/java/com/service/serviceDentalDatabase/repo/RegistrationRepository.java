//Jpa Repository for Database Connection 
package com.service.serviceDentalDatabase.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.service.serviceDentalDatabase.model.Registration;

public interface RegistrationRepository extends JpaRepository<Registration, Integer> {
	//Methods for Data Fetching 
	@Override
	List<Registration> findAll();
	public Registration findByEmailId(String emailId);

	public Registration findByEmailIdAndPassword(String email, String password);

}
