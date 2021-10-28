package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.service.serviceDentalDatabase.model.UWUser;

 

public interface UWRepo extends CrudRepository<UWUser,Integer> {
	UWUser findByWriterIdAndPassword(String writerId, String password);
    UWUser findByEmail(String emailId);
    UWUser findById(String Id);
}
