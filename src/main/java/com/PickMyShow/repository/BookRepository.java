package com.PickMyShow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.PickMyShow.model.*;

public interface BookRepository extends JpaRepository<Book, Long>{
	
}
