package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.Registration;




public interface RegistrationRepository extends JpaRepository<Registration, Integer> {
	public Registration findByEmailId(String emailId);

	public Registration findByEmailIdAndPassword(String email, String password);

}
