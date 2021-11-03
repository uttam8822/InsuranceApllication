package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.LifeUser;

public interface LifeScheduleRepo extends JpaRepository<LifeUser,String> {
	//@Modifying
	//@Query("UPDATE LifeUser SET status='Yes' where status='No'")
	

}
