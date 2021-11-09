//Scheduler for Dental Service
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
	//Wiring
	@Autowired
	private DentalScheduleRepo repo;
	@Autowired
	private EmailSendService service1;

	Logger log = LoggerFactory.getLogger(DentalScheduleService.class);


	@Scheduled(fixedRate = 30000)              //Scheduler for 30 sec
	public void updateStatus() {
		List<ServiceUser> users= repo.findAll();
		for(ServiceUser user:users) {
		//ServiceUser user = new ServiceUser();
		if(user.getStatus()==null) {
			if("No".equals(user.getTobacco()) && "Yes".equals( user.getCancellingInsurance())) {
		      user.setStatus("Yes");
		      service1.sendSimpleEmail(user.getEmail(),"Dear User, "+user.getFirstName()+"\nYour application has been approved for Dental service"+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
	    				"\nPhone : " + 
	    				"+91-120-4018100"+"\nEmail : support@impetus.com"
	    		,"Application Approved");

			}

	          repo.save(user);
		   } 
	    }
	}
}
