	//Scheduler for Life Services
	package com.service.serviceDentalDatabase.service;
	
	import org.slf4j.LoggerFactory;
	
	import java.util.Date;
	import java.util.List;
	
	import org.slf4j.Logger;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.scheduling.annotation.Scheduled;
	import org.springframework.stereotype.Service;
	
	import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.model.Registration;
import com.service.serviceDentalDatabase.repo.LifeScheduleRepo;
import com.service.serviceDentalDatabase.repo.RegistrationSchedulerRepo;
	
	@Service
	public class LifeScheduleService {
	
	@Autowired
	private LifeScheduleRepo repo;
	@Autowired
	private RegistrationSchedulerRepo rs;
	@Autowired
	private EmailSendService service1;
	Logger log = LoggerFactory.getLogger(LifeScheduleService.class);
	
	/*
	Scheduler for 30 sec.
	@Parameter= No parameter.
	@Auther= Uttam Kumar Singh.
	*/
	@Scheduled(fixedRate = 30000)                                //Schdeuler 
	public void updateStatus() {
		
		List<LifeUser> users= repo.findAll();
		for(LifeUser user : users) {
			if(user.getStatus()==null) {
				if("No".equals(user.getHivIssue()) && "Yes".equals(user.getTobacco())) {
				System.out.println(user.getTobacco());
			      user.setStatus("Approved");
			      service1.sendSimpleEmail(user.getEmail(),"Dear User, "+user.getFirstName()+"\nYour application has been approved for Life service"+"\n In case if you have any query please feel free to connect with us."+"\n\n\n\n\nImpetus Technologies (India) Pvt. Ltd."+"\nSDF No. K-13 to 16, NSEZ"+"\nPhase-II Noida-201305 (U.P.)" + 
		    				"\nPhone : " + 
		    				"+91-120-4018100"+"\nEmail : support@impetus.com"
		    		,"Application Approved");
	
				}
		       repo.save(user);
			}
		}
		     
		}

	@Scheduled(fixedRate=600000)
	public void otpToken() {
	List<Registration> users1= rs.findAll();
	int l=users1.size();
	System.out.println(l);
	for(Registration user : users1) {
		int a = (int)(Math.random()*(99999999-11111111+1)+11111111);
			if(user.getOtpOfUser()!=0)
			{
		      user.setOtpOfUser(a);
		      System.out.println(a);
			}
			  rs.save(user);
		}
	     
	}
	}

