package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.UWUser;

 

public interface UWRepo extends JpaRepository<UWUser,Integer> {
	UWUser findByWriterIdAndPassword(String writerId, String password);

}
