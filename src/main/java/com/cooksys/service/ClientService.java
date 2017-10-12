package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cooksys.dto.FlightDto;
import com.cooksys.entity.Client;
import com.cooksys.entity.Flight;
import com.cooksys.entity.Trip;
import com.cooksys.mapper.ClientMapper;
import com.cooksys.mapper.FlightMapper;
import com.cooksys.pojo.Credentials;
import com.cooksys.repository.ClientRepository;
import com.cooksys.repository.FlightRepository;
import com.cooksys.repository.TripRepository;

/**
 * 
 * @author Artem Kolin
 *
 */
@Service
public class ClientService {
	
	@Autowired
	ClientRepository clientRepository;
	
	@Autowired
	ClientMapper clientMapper;
	
	@Autowired
	TripRepository tripRepository;
	
	@Autowired
	FlightMapper flightMapper;
	
	@Autowired
	FlightRepository flightRepository;

	
	/**
	 * Creation of new client if he/she doesn't exist already
	 * @param credentials
	 * @return
	 */
	public boolean newClient(Credentials credentials) {
		if(clientRepository.findByCredentials(credentials)!=null) return false;
		clientRepository.save(clientMapper.fromCred(credentials));
		return true;
	}

	/**
	 * Verification of user crdentials on sign in
	 * @param credentials
	 * @return boolean
	 */
	public boolean verifyClient(Credentials credentials) {
		return clientRepository.findByCredentials(credentials)!=null;
	}

	/**
	 * This method save booked by user flights to database as Trip object and create relationship between Client and Trip (list of fligts)
	 * @param login - username
	 * @param tripFlights - list of flights on a trip
	 */
	@Transactional
	public void bookTrip(String login, List<FlightDto> tripFlights) {
		Client client = clientRepository.findByCredentialsLogin(login);
		Trip newTrip = new Trip();
		newTrip.setClient(client);
		List<Flight> flights = flightMapper.flightsFromDtos(tripFlights);
		flightRepository.save(flights);
		newTrip.setFlights(flights);
		tripRepository.saveAndFlush(newTrip);
	}

	/**
	 * This method pulls all user trips from database and return them as array of arrays (trips)
	 * @param login - username
	 * @return array of trips
	 */
	public List<List<FlightDto>> getMyTrips(String login) {
		Client client = clientRepository.findByCredentialsLogin(login);
		List<Trip> trips = client.getTrips();
		List<List<FlightDto>> flightsList = new ArrayList<>();
		for(int i=trips.size()-1; i>=0; i--){							//Going backwards to get most recent trips on top on the client side
			flightsList.add(flightMapper.dtosFromFlights(trips.get(i).getFlights()));
		}
		return flightsList;
	}

}
