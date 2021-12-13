package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.UWUser;

public interface UWSchedulerRepo extends JpaRepository<UWUser,Integer>{

}
