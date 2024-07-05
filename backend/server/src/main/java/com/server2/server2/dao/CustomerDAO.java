package com.server2.server2.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.server2.server2.bean.Customer;

public interface CustomerDAO extends MongoRepository<Customer,Integer>{
	Optional<Customer> findOneByUsernameAndPassword(String username, String password);
    Customer findByUsername(String username);
    Customer findByEmail(String email);
}
