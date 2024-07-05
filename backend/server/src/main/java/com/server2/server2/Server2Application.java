package com.server2.server2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
@EnableWebMvc
//@SpringBootApplication
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class Server2Application {
	public static void main(String[] args) {
		SpringApplication.run(Server2Application.class, args);
	}
}
