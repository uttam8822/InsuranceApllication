//Jpa Repository for Database Connection 
package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.serviceDentalDatabase.model.Admin;
//Jpa Repositiry
public interface AdminLoginRepo extends JpaRepository<Admin,Integer> {
    
	 /*
	  Methods for Fetching data from Database.
	  @Parameter= adminId,password,emailId.
	  @Auther=Uttam kumar singh
	 */
	Admin findByAdminIdAndPassword(String adminId, String password);
	Admin findByEmail(String emailId);
    Admin findByAdminId(String adminId);
}
