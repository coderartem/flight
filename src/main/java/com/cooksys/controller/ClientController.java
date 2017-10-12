package com.cooksys.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.dto.FlightDto;
import com.cooksys.pojo.Credentials;
import com.cooksys.service.ClientService;

@RestController
@RequestMapping("users")
@CrossOrigin
public class ClientController {
	
	@Autowired
	ClientService cS;

	//Client registration
	@PostMapping("new")
	public boolean newClient(@RequestBody Credentials cred) {
		return cS.newClient(cred);
	}
	
	//Verification on sign in
	@PostMapping("verify")
	public boolean verifyClient(@RequestBody Credentials cred){
		return cS.verifyClient(cred);
	}
	
	//This client trips
	@GetMapping("mytrips/{login}")
	public List<List<FlightDto>> getMyTrips(@PathVariable String login){
		return cS.getMyTrips(login);
	}
	
	//Book new trip
	@PostMapping("book/{login}")
	public void bookTrip(@PathVariable String login, @RequestBody List<FlightDto> tripArray){
		cS.bookTrip(login, tripArray);
	}
}
