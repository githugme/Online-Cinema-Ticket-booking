package com.PickMyShow.service;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.PickMyShow.repository.*;
import com.PickMyShow.model.Contact;
import com.PickMyShow.model.Book;
import com.PickMyShow.model.User;
import com.PickMyShow.repository.ContactRepository;
import com.PickMyShow.repository.BookRepository;
import com.PickMyShow.repository.UserRepository;
import com.PickMyShow.model.*;

@Service
public class UserService {
	
	@Autowired
	UserRepository user_repo;
	
	@Autowired
	ContactRepository contact_repo;
	
	@Autowired
	BookRepository book_repo;
	
	public User saveUser(User user)
	{
		return user_repo.save(user);
	}
	
	public User fetchUserByEmailId(String email)
	{
		return user_repo.findByEmail(email);
	}
	
//	public User fetchUserByPhone(String phone)
//	{
//		return user_repo.findByPhone(phone);
//	}
	
	public User fetchUserByEmailAndPassword(String email,String password)
	{
		return user_repo.findByEmailAndPassword(email,password);
	}
	
	public Contact saveContactInfo(Contact contact)
	{
		return contact_repo.save(contact);
	}
	
	public Book saveBooking(Book book)
	{
		return book_repo.save(book);
	}
	
//	public List<Book> fetchTransport(String from,String to,Integer type)
//	{
//		return book_repo.findBySourceAndDestinationAndType(from,to,type);
//	}
	
	

}
