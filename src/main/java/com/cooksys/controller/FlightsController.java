package com.cooksys.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.pojo.FlightDto;
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
	
	@GetMapping
	public ArrayList<FlightDto> getFlightList()
	{
		return flightService.getDailyFlightList();
	}
	
	@GetMapping("origin/{orig}/destination/{destin}")
	public List<List<FlightDto>> getBestRoute(@PathVariable String orig, @PathVariable String destin){
		return flightService.findRoutes(orig, destin);
	}

}
