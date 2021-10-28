package com.service.serviceDentalDatabase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UWUser {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String fullName;
	private String email;
	private String writerId;
	private String password;
	
	public UWUser() {}
	
	public UWUser(int id,String fullName,String email,String writerId, String password) {
	super();
	this.id = id;
	this.fullName=fullName;
	this.email=email;
	this.writerId = writerId;
	this.password = password;
	}
	
	
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
	public String getWriterId() {
	return writerId;
	}
	public void setWriterId(String writerId) {
	this.writerId = writerId;
	}
	public String getPassword() {
	return password;
	}
	public void setPassword(String password) {
	this.password = password;
}

}
