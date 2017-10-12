package com.cooksys.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.dto.FlightDto;
import com.cooksys.service.FlightService;
import com.cooksys.service.LocationService;

@RestController
@RequestMapping("flights")
@CrossOrigin
public class FlightsController {
	
	@Autowired
	LocationService locationService;
	
	@Autowired
	FlightService flightService;
	
	
	//Get lis of generated flights
	@GetMapping
	public ArrayList<FlightDto> getFlightList()
	{
		return flightService.getDailyFlightList();
	}
	
	//Get possible routes from origin to destination
	@GetMapping("origin/{origin}/destination/{destination}")
	public List<List<FlightDto>> getBestRoute(@PathVariable String origin, @PathVariable String destination){
		return flightService.findRoutes(origin, destination);
	}

}
