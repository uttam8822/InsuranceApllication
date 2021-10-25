package com.service.serviceDentalDatabase.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.ServiceUser;
import com.service.serviceDentalDatabase.repo.DentalScheduleRepo;

@Service
public class DentalScheduleService {
	@Autowired
	private DentalScheduleRepo repo;

	Logger log = LoggerFactory.getLogger(DentalScheduleService.class);


	@Scheduled(fixedRate = 5000)
	public void updateStatus() {
		ServiceUser user = new ServiceUser();
		if(user.getStatus()==null) {
			if(user.getTobacco()=="No" && user.getCancellingInsurance()=="Yes") {
		      user.setStatus("Yes");
	          repo.save(user);
		}
	}
	}
	@Scheduled(cron="30 * * * * * *")
	public void fetchLifeData() {
		List<ServiceUser> users= repo.findAll();
		log.info("users : {}", users);
	}

}
