package com.service.serviceDentalDatabase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {
			
	        @Id
			@GeneratedValue(strategy=GenerationType.AUTO)
			private int id;
	      private String fullName;
	       // private String emailId;
			private String adminId;
			private String password;
			
			
			public Admin() {}
			
			public Admin(int id, String fullName,String adminId, String password) {
			super();
			this.id = id;
		//	this.emailId=emailId;
		    this.fullName=fullName;
			this.adminId = adminId;
			this.password = password;
			}
			
			
			/*public String getFullName() {
				return fullName;
			}

			public void setFullName(String fullName) {
				this.fullName = fullName;
			}

			public String getEmailId() {
				return emailId;
			}

			public void setEmailId(String emailId) {
				this.emailId = emailId;
			}
*/
			public int getId() {
			return id;
			}
			public void setId(int id) {
			this.id = id;
			}
			public String getAdminId() {
			return adminId;
			}
			public void setAdminId(String adminId) {
			this.adminId = adminId;
			}
			public String getPassword() {
			return password;
			}
			public void setPassword(String password) {
			this.password = password;
}
}