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
	private String email;
	private String adminId;
	private String password;

	public Admin() {}
	//Parameterized Constructor
	public Admin(int id, String fullName,String email,String adminId, String password) {
		super();
		this.id = id;
		this.email=email;
		this.fullName=fullName;
		this.adminId = adminId;
		this.password = password;
	}

	//Getter and Setter method
	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmailId() {
		return email;
	}

	public void setEmailId(String emailId) {
		this.email = emailId;
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