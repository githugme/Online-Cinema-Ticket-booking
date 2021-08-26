package com.PickMyShow.controller;

import java.util.List;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.PickMyShow.repository.*;
import com.PickMyShow.model.*;
import com.PickMyShow.service.*;



@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	UserRepository repo1;
	
	@Autowired
	BookRepository repo2;
	
	@Autowired
	UserService service;
	
	@PostMapping("/Registration")
	public User saveUser(@RequestBody User user) throws Exception
	{
		
		
			String email=user.getEmail();
			if(email!=null && !email.equals(""))
			{
				User obj=service.fetchUserByEmailId(email);
				if(obj!=null)
				{
					throw new Exception("user with " + email + " is already exist");
				}
			}
			
			
			User obj=null;
			obj=service.saveUser(user);
			return obj;
			

		
	}
	
//	@PostMapping("/Registration")
//	public User saveUser1(@RequestBody User user) {
//	    User userDto = new User();
//	    UserService.saveUser("user", userDto);
//	    return "Registration";
//	}

	
		
	
	@PostMapping("/Login")
	public User fetchUserByEmailAndPassword(@RequestBody User user) throws Exception
	{
		String email=user.getEmail();
		String password=user.getPassword();
		
		
		User obj=null;
		if(email!=null && password!=null)
		{
			obj=service.fetchUserByEmailAndPassword(email, password);
		}
		if(obj==null)
		{
			throw new Exception("Please enter valid credentials");
		}
		
		return obj;
	}
	
	
	
	@PostMapping("/Contact")
	public Contact saveContactInfo(@RequestBody Contact contact) throws Exception
	{
		
		Contact Cobj=service.saveContactInfo(contact);
		return Cobj;
		
	}

	
	@PostMapping("/Book-ticket")
	public Book saveStudent(@RequestBody Book book) throws Exception
	{
		
		Book Bobj=service.saveBooking(book);
		return Bobj;
	}
	
}
