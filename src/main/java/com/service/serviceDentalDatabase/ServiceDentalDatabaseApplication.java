 
package com.service.serviceDentalDatabase;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

//This is Main Method responsible for All excution of this service
@SpringBootApplication                                                   //Springboot app annotation
@EnableScheduling                                                          // Enablinge Scheduler 
public class ServiceDentalDatabaseApplication {
  // Main Method
	public static void main(String[] args) {
		SpringApplication.run(ServiceDentalDatabaseApplication.class, args);
	}

}
