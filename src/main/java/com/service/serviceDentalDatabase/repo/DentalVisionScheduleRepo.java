package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.DentalVisionUser;

public interface DentalVisionScheduleRepo extends JpaRepository<DentalVisionUser,String>{

}
