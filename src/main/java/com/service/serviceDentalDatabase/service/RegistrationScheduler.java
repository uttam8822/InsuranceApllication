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

	
	@Scheduled(fixedRate = 10000)                                //Schdeuler 
	public void updateStatus() {
		System.out.println("Hello");
		List<Registration> users= rs.findAll();
		int l=users.size();
		System.out.println(l);
		for(Registration user : users) {
			int a = (int)(Math.random()*(99999999-11111111+1)+11111111);
			for(int i=1;i<=l;i++) {
				if(user.getOtpOfUser()!=0) {
			user.setOtpOfUser(a);
			System.out.println(a);
			
				}
				  rs.save(user);
			}
		     
			}
		}
	}
