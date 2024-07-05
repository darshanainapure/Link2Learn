package com.server2.server2.service;


import com.server2.server2.bean.CustomerDTO;
import com.server2.server2.bean.LoginDTO;
import com.server2.server2.config.LoginMesage;


public interface CustomerService {
	
	    String addCustomer(CustomerDTO customerDTO);
	    LoginMesage registerCustomer(CustomerDTO customerDTO);
	    LoginMesage loginCustomer(LoginDTO loginDTO);
	
	    boolean checkUserExists(String username, String email);

	    boolean checkUsernameExists(String username);

	    boolean checkEmailExists(String email);

}

