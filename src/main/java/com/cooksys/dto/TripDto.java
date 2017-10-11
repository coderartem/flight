package com.cooksys.dto;

import java.util.List;

import com.cooksys.pojo.FlightDto;

public class TripDto {
	

	private List<FlightDto> flights;


	public List<FlightDto> getFlights() {
		return flights;
	}


	public void setFlights(List<FlightDto> flights) {
		this.flights = flights;
	}

}