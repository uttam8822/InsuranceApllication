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


	@Scheduled(fixedRate = 5000)
	public void updateStatus() {
		DentalVisionUser user = new DentalVisionUser();
		if(user.getStatus()==null) {
	     if(user.getAnyCavity()=="No" && user.getTobacco()=="Yes" && user.getAnyEyeOperation()=="No" && user.getAnyEyeDisease()=="No" && user.getOralOperation()=="Yes")
		{
		user.setStatus("Yes");
	       repo.save(user);
		}
	}
	}
	@Scheduled(cron="30 * * * * * *")
	public void fetchLifeData() {
		List<DentalVisionUser> users= repo.findAll();
		log.info("users : {}", users);
	}
	
}
