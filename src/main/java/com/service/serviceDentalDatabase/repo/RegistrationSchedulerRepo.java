package com.service.serviceDentalDatabase.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.Registration;

public interface RegistrationSchedulerRepo extends JpaRepository<Registration,Integer> {

}
