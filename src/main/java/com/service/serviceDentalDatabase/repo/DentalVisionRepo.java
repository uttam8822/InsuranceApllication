package com.service.serviceDentalDatabase.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.model.ServiceUser;

public interface DentalVisionRepo extends JpaRepository<DentalVisionUser,String> {
	@Override
	List<DentalVisionUser> findAll();
}
