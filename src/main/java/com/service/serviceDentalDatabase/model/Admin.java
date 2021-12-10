//POJO class for Admin Data
package com.service.serviceDentalDatabase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity                              //defining databse object
public class Admin {
			
	        @Id
			@GeneratedValue(strategy=GenerationType.AUTO)
			private int id;
	        private String fullName;
	        private String emailId;
			private String adminId;
			private String password;
			private int otpOfUser;
			public Admin() {}
			//Parameterized Constructor
			public Admin(int id, String fullName,String emailId,String adminId, String password,int otpOfUser) {
			super();
			this.id = id;
			this.emailId=emailId;
		    this.fullName=fullName;
			this.adminId = adminId;
			this.password = password;
			this.otpOfUser=otpOfUser;
			}
			
			//Getter and Setter method
			
			
			
			public String getFullName() {
				return fullName;
			}

			public String getEmailId() {
				return emailId;
			}
			public void setEmailId(String emailId) {
				this.emailId = emailId;
			}
			public int getOtpOfUser() {
				return otpOfUser;
			}
			public void setOtpOfUser(int otpOfUser) {
				this.otpOfUser = otpOfUser;
			}
			public void setFullName(String fullName) {
				this.fullName = fullName;
			}

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