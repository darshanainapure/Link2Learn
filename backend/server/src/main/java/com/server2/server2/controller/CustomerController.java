package com.server2.server2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.server2.server2.bean.CustomerDTO;
import com.server2.server2.bean.LoginDTO;
import com.server2.server2.config.LoginMesage;
import com.server2.server2.service.CustomerService;

@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;
    @PostMapping(path = "/save")
    public String saveCustomer(@RequestBody CustomerDTO customerDTO)
    {
        String id = customerService.addCustomer(customerDTO);
        return id;
    }
    
    @PostMapping(path = "/registerStatus")
    public ResponseEntity<?> registerCustomer(@RequestBody CustomerDTO customerDTO)
    {
    
        LoginMesage loginResponse = customerService.registerCustomer(customerDTO);
        return ResponseEntity.ok(loginResponse);
    	
    }
    
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginDTO loginDTO)
    {
    
        LoginMesage loginResponse = customerService.loginCustomer(loginDTO);
        return ResponseEntity.ok(loginResponse);
    	
    }
}
