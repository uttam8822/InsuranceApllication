//Schedueler for Dental Vision Service
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
    //Wiring
	@Autowired
	private DentalVisionScheduleRepo repo;
	@Autowired
	private EmailSendService service1;

	Logger log = LoggerFactory.getLogger(LifeScheduleService.class);

	@Scheduled(fixedRate = 30000)              //Scheduler 
	public void updateStatus() {
		List<DentalVisionUser> users= repo.findAll();
	//	DentalVisionUser user = new DentalVisionUser();
		for(DentalVisionUser user:users) {
		if(user.getStatus()==null) {
	     if("No".equals(user.getAnyCavity()) && "Yes".equals(user.getTobacco()) && "No".equals(user.getAnyEyeOperation()) && "No".equals(user.getAnyEyeDisease()) && "Yes".equals(user.getOralOperation()))
		{
		user.setStatus("Yes");
		 service1.sendSimpleEmail(user.getEmail(),"Dear User, "+user.getFirstName()+"\nYour application has been approved for Dental Vision service"+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
 				"\nPhone : " + 
 				"+91-120-4018100"+"\nEmail : support@impetus.com"
 		,"Application Approved");

		}

	       repo.save(user);
		}
	}
		}
	}

