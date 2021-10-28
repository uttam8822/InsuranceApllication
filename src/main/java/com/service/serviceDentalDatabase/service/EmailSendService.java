package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSendService {

@Autowired
private JavaMailSender mailSender;

public void sendSimpleEmail(String toEmail,
String body,
String subject) {
SimpleMailMessage message = new SimpleMailMessage();

message.setFrom("xabc58913@gmail.com");
message.setTo(toEmail);
message.setText(body);
message.setSubject(subject);

mailSender.send(message);
System.out.println("Mail Send...");


}
}

