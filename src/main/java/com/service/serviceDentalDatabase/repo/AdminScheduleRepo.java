package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.Admin;

public interface AdminScheduleRepo extends JpaRepository<Admin,Integer> {

}
