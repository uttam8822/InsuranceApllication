//Jpa Repository for Database Connection 
package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.service.serviceDentalDatabase.model.UWUser;

public interface UWRepo extends CrudRepository<UWUser,Integer> {
	 /*
	  Methods for Fetching data from Database.
	  @Parameter= adminId,password,emailId,Id.
	  @Auther=Uttam kumar singh
	 */
	UWUser findByWriterIdAndPassword(String writerId, String password);
    UWUser findByEmail(String emailId);
    UWUser findByWriterId(String Id);
}
