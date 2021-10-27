package com.service.serviceDentalDatabase.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.Registration;




public interface RegistrationRepository extends JpaRepository<Registration, Integer> {
	@Override
	List<Registration> findAll();
	public Registration findByEmailId(String emailId);

	public Registration findByEmailIdAndPassword(String email, String password);

}
