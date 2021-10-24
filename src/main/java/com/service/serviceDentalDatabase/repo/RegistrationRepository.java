package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.User;




public interface RegistrationRepository extends JpaRepository<User, Integer> {
	public User findByEmailId(String emailId);

	public User findByEmailIdAndPassword(String email, String password);

}
