package com.cooksys.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.cooksys.entity.Flight;
import com.cooksys.pojo.FlightDto;

@Mapper(componentModel = "spring")
public interface FlightMapper {

	Flight flightFromDto(FlightDto flight);
	List<Flight> DtosToFlights (List<FlightDto> flights);
	
	FlightDto DtoToFlight(Flight flight);
	List<FlightDto> flightsFromDtos (List<Flight> flights);
}
