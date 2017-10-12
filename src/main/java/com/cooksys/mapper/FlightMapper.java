package com.cooksys.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.cooksys.dto.FlightDto;
import com.cooksys.entity.Flight;

@Mapper(componentModel = "spring")
public interface FlightMapper {

	Flight flightFromDto(FlightDto flight);
	List<Flight> flightsFromDtos (List<FlightDto> flights);
	
	FlightDto dtoFromFlight(Flight flight);
	List<FlightDto> dtosFromFlights (List<Flight> flights);
}
