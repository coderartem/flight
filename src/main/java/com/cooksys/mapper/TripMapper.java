package com.cooksys.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.cooksys.dto.TripDto;
import com.cooksys.entity.Trip;

@Mapper(componentModel="spring")
public interface TripMapper {

	TripDto triptoDto(Trip trip);
	List<TripDto> tripstoDtos(List<Trip> trips);
	
	Trip DtoToTrip(TripDto tripDto);
	List<Trip> DtosToTrips(List<TripDto> tripDtos);
}
