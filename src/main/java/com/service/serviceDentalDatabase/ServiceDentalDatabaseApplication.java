package com.service.serviceDentalDatabase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class ServiceDentalDatabaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceDentalDatabaseApplication.class, args);
	}

}
