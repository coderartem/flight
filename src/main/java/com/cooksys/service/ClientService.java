package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cooksys.dto.TripDto;
import com.cooksys.entity.Client;
import com.cooksys.entity.Flight;
import com.cooksys.entity.Trip;
import com.cooksys.mapper.ClientMapper;
import com.cooksys.mapper.FlightMapper;
import com.cooksys.mapper.TripMapper;
import com.cooksys.pojo.Credentials;
import com.cooksys.pojo.FlightDto;
import com.cooksys.repository.ClientRepository;
import com.cooksys.repository.FlightRepository;
import com.cooksys.repository.TripRepository;

@Service
public class ClientService {
	
	@Autowired
	ClientRepository cR;
	
	@Autowired
	ClientMapper cM;
	
	@Autowired
	TripRepository tR;
	
	@Autowired
	FlightMapper fM;
	
	@Autowired
	FlightRepository fR;
	
	@Autowired
	TripMapper tM;

	public boolean newClient(Credentials cred) {
		if(cR.findByCredentials(cred)!=null) return false;
		cR.save(cM.fromCred(cred));
		return true;
		
		
	}

	public boolean verifyClient(Credentials cred) {
		return cR.findByCredentials(cred)!=null;
		
	}

	@Transactional
	public void bookTrip(String login, List<FlightDto> tripArray) {
		Client client = cR.findByCredentialsLogin(login);
		Trip newTrip = new Trip();
		newTrip.setClient(client);
		List<Flight> flights = fM.DtosToFlights(tripArray);
		fR.save(flights);
		newTrip.setFlights(flights);
		tR.saveAndFlush(newTrip);
	}

	public List<List<FlightDto>> getMyTrips(String login) {
		Client client = cR.findByCredentialsLogin(login);
		List<TripDto> trips = tM.tripstoDtos(client.getTrips());
		List<List<FlightDto>> fDto = new ArrayList<>();
		for(TripDto x : trips){
			fDto.add(x.getFlights());
		}
		return fDto;
	}

}
