package com.avi.Entity;

import java.math.BigInteger;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User 
{
	@Id
	String username;
	String password;
	BigInteger mobno; // setMobileno()
	String emailid;
	

	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", mobno=" + mobno + ", emailid=" + emailid
				+ "]";
	}
	public BigInteger getMobno() {
		return mobno;
	}
	public void setMobno(BigInteger mobno) {
		this.mobno = mobno;
	}
	
	
	
	// public boolean equals(Object obj)
	
	// userfrombrowser.equals(userfromdatabase);
	
	@Override
	public boolean equals(Object secondobject) 
	{
		System.out.println("equals from User class");
		
		User user=(User)secondobject;
		
		if(this.username.equals(user.username) && this.password.equals(user.password))
			
			return true;
		else
			return false;
	}
	

	
	
	
	
}

