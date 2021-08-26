package com.PickMyShow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.PickMyShow.model.Contact;
import com.PickMyShow.model.User;

public interface ContactRepository extends JpaRepository<Contact, Long>{
	
	User findByEmail(String email);

}
