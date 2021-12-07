package com.service.serviceDentalDatabase.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;

import com.service.serviceDentalDatabase.model.Registration;
import com.service.serviceDentalDatabase.repo.RegistrationSchedulerRepo;


public class RegistrationScheduler {
	
	@Autowired
	private RegistrationSchedulerRepo rs;
	
	Logger log = LoggerFactory.getLogger(RegistrationScheduler.class);

	
	@Scheduled(fixedRate = 30000)                                //Schdeuler 
	public void updateStatus() {
		List<Registration> users= rs.findAll();
		for(Registration user : users) {
			int a = (int)(Math.random()*(99999999-11111111+1)+11111111);
			if(user.getOtpOfUser()!=0) {
			user.setOtpOfUser(a);
			System.out.println(a);
			}
		       rs.save(user);
			}
		}
	}
