package com.service.serviceDentalDatabase.service;

import org.slf4j.LoggerFactory;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.repo.LifeScheduleRepo;

@Service
public class LifeScheduleService {

@Autowired
private LifeScheduleRepo repo;

Logger log = LoggerFactory.getLogger(LifeScheduleService.class);


@Scheduled(fixedRate = 5000)
public void updateStatus() {
	LifeUser user = new LifeUser();
	if(user.getStatus()==null) {
		if(user.getHivIssue()=="No" && user.getTobacco()=="Yes") {
	      user.setStatus("Yes");
		}
       repo.save(user);
	}
}
@Scheduled(cron="30 * * * * * *")
public void fetchLifeData() {
	List<LifeUser> users= repo.findAll();
	log.info("users : {}", users);
}

}
