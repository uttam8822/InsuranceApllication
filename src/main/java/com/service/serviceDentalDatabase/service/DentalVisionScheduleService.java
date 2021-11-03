package com.service.serviceDentalDatabase.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.repo.DentalVisionScheduleRepo;

@Service
public class DentalVisionScheduleService {
 
	@Autowired
	private DentalVisionScheduleRepo repo;

	Logger log = LoggerFactory.getLogger(LifeScheduleService.class);


	@Scheduled(fixedRate = 30000)
	public void updateStatus() {
		List<DentalVisionUser> users= repo.findAll();
	//	DentalVisionUser user = new DentalVisionUser();
		for(DentalVisionUser user:users) {
		if(user.getStatus()==null) {
	     if("No".equals(user.getAnyCavity()) && "Yes".equals(user.getTobacco()) && "No".equals(user.getAnyEyeOperation()) && "No".equals(user.getAnyEyeDisease()) && "Yes".equals(user.getOralOperation()))
		{
		user.setStatus("Yes");
	       repo.save(user);
		}
	}
		}
	}
/*	@Scheduled(initialDelay = 15000 , fixedDelay=15000)
	public void fetchLifeData() {
		List<DentalVisionUser> users= repo.findAll();
		log.info("users : {}", users);
	}*/
	
}
