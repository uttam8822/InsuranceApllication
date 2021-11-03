package com.service.serviceDentalDatabase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
//@Access(value=AccessType.FIELD)
public class LifeUser {
	 // @Id
	 // @GeneratedValue(strategy=GenerationType.IDENTITY)
	 // private int id;
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
	   private String healthIssue;
	   private String cancellingInsurance;
	   private String groupInsurance;
	   private String tobacco;
	   private String hivIssue;
	   private String lungsIssue;
	   private String additionalComments;
	   private String status;
	   private String member;
	   private String reason;
	public LifeUser() {
		super();
	}
	public LifeUser(String firstName, String middleNmme, String lastName, String aadhar, String email, String pan,
			String address, String zip, String city, String state, String contact, String dateOfBirth,
			String occupation, String income, String selectPlane, String gender, String healthIssue,
			String cancellingInsurance, String groupInsurance, String tobacco, String hivIssue, String lungsIssue,
			String additionalComments,String status,String member,String reason) {
		super();
		//this.id=id;
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
		this.healthIssue = healthIssue;
		this.cancellingInsurance = cancellingInsurance;
		this.groupInsurance = groupInsurance;
		this.tobacco = tobacco;
		this.hivIssue = hivIssue;
		this.lungsIssue = lungsIssue;
		this.additionalComments = additionalComments;
		this.status=status;
		this.member=member;
		this.reason=reason;
	}
	/*public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id=id;
	}*/
	
	
	public String getFirstName() {
		return firstName;
	}
	
	public String getReason() {
		return reason;
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
	public String getHealthIssue() {
		return healthIssue;
	}
	public void setHealthIssue(String healthIssue) {
		this.healthIssue = healthIssue;
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
	public String getHivIssue() {
		return hivIssue;
	}
	public void setHivIssue(String hivIssue) {
		this.hivIssue = hivIssue;
	}
	public String getLungsIssue() {
		return lungsIssue;
	}
	public void setLungsIssue(String lungsIssue) {
		this.lungsIssue = lungsIssue;
	}
	public String getAdditionalComments() {
		return additionalComments;
	}
	public void setAdditionalComments(String additionalComments) {
		this.additionalComments = additionalComments;
	}  
}
