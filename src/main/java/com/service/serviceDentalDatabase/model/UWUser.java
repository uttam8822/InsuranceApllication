//POJO class for UnderWriter
package com.service.serviceDentalDatabase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity                       //Database Objects
public class UWUser {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String fullName;
	private String emailId;
	private String writerId;
	private String password;
	private int otpOfUser;
	
	public UWUser() {}
	//Parameterized Constructor
	public UWUser(int id,String fullName,String emailId,String writerId, String password,int otpOfUser) {
	super();
	this.id = id;
	this.fullName=fullName;
	this.emailId=emailId;
	this.writerId = writerId;
	this.password = password;
	this.otpOfUser=otpOfUser;
	}
	
	//Getter and Setter Method
	
	
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
