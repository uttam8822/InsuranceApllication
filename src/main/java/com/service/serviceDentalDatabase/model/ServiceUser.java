//POJO class for Dental Service
package com.service.serviceDentalDatabase.model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity                               //Database Objects
public class ServiceUser {
	
	   private String firstName;
	   private String middleNmme;
	   private String lastName;
	   @Id
	   private String aadhar;
	   private String email;
	   private String pan;
	   private String address;
	   private String zip;
	   private String city;
	   private String state;
	   private String contact;
	  // @DateTimeFormat(pattern = "dd/MM/yyyy")
	   private String dateOfBirth;
	   private String occupation;
	   private String income;
	   private String selectPlane;
	   private String gender;
	   private String cancellingInsurance;
	   private String groupInsurance;
	   private String tobacco;
	   private String additionalComments;
	   private String status;
	   private String member;
	   private String reason;
	   private String   bankName;
	   private String   bankAccountNumber;
	   private String   ifscCode;

   public ServiceUser() {
		super();
	}
//Parameterized Constructor

//Getter and Setter Method

public String getReason() {
	return reason;
}
public ServiceUser(String firstName, String middleNmme, String lastName, String aadhar, String email, String pan,
		String address, String zip, String city, String state, String contact, String dateOfBirth, String occupation,
		String income, String selectPlane, String gender, String healthIssue, String cancellingInsurance,
		String groupInsurance, String tobacco, String additionalComments,String member,String reason) {
	super();
	this.firstName = firstName;
	this.middleNmme = middleNmme;
	this.lastName = lastName;
	this.aadhar = aadhar;
	this.email = email;
	this.pan = pan;
	this.address = address;
	this.zip = zip;
	this.city = city;
	this.state = state;
	this.contact = contact;
	this.dateOfBirth = dateOfBirth;
	this.occupation = occupation;
	this.income = income;
	this.selectPlane = selectPlane;
	this.gender = gender;
	this.cancellingInsurance = cancellingInsurance;
	this.groupInsurance = groupInsurance;
	this.tobacco = tobacco;
	this.additionalComments = additionalComments;
	this.status = status;
	this.member = member;
	this.reason = reason;
	this.bankName = bankName;
	this.bankAccountNumber = bankAccountNumber;
	this.ifscCode = ifscCode;
}
public String getBankName() {
	return bankName;
}
public void setBankName(String bankName) {
	this.bankName = bankName;
}
public String getBankAccountNumber() {
	return bankAccountNumber;
}
public void setBankAccountNumber(String bankAccountNumber) {
	this.bankAccountNumber = bankAccountNumber;
}
public String getIfscCode() {
	return ifscCode;
}
public void setIfscCode(String ifscCode) {
	this.ifscCode = ifscCode;
}
public void setReason(String reason) {
	this.reason = reason;
}
public String getMember() {
	return member;
}
public void setMember(String member) {
	this.member = member;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getMiddleNmme() {
	return middleNmme;
}

public void setMiddleNmme(String middleNmme) {
	this.middleNmme = middleNmme;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

public String getAadhar() {
	return aadhar;
}

public void setAadhar(String aadhar) {
	this.aadhar = aadhar;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPan() {
	return pan;
}

public void setPan(String pan) {
	this.pan = pan;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}


public String getZip() {
	return zip;
}

public void setZip(String zip) {
	this.zip = zip;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

public String getState() {
	return state;
}

public void setState(String state) {
	this.state = state;
}

public String getContact() {
	return contact;
}

public void setContact(String contact) {
	this.contact = contact;
}

public String getDateOfBirth() {
	return dateOfBirth;
}

public void setDateOfBirth(String dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
}

public String getOccupation() {
	return occupation;
}

public void setOccupation(String occupation) {
	this.occupation = occupation;
}

public String getIncome() {
	return income;
}

public void setIncome(String income) {
	this.income = income;
}

public String getSelectPlane() {
	return selectPlane;
}

public void setSelectPlane(String selectPlane) {
	this.selectPlane = selectPlane;
}

public String getGender() {
	return gender;
}

public void setGender(String gender) {
	this.gender = gender;
}



public String getCancellingInsurance() {
	return cancellingInsurance;
}

public void setCancellingInsurance(String cancellingInsurance) {
	this.cancellingInsurance = cancellingInsurance;
}

public String getGroupInsurance() {
	return groupInsurance;
}

public void setGroupInsurance(String groupInsurance) {
	this.groupInsurance = groupInsurance;
}

public String getTobacco() {
	return tobacco;
}

public void setTobacco(String tobacco) {
	this.tobacco = tobacco;
}

public String getAdditionalComments() {
	return additionalComments;
}

public void setAdditionalComments(String additionalComments) {
	this.additionalComments = additionalComments;
}

}
