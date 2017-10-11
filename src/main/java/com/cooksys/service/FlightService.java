package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.cooksys.component.FlightGenerator;
import com.cooksys.pojo.FlightDto;

@Service
public class FlightService {

	@Autowired
	FlightGenerator generator;

	private ArrayList<FlightDto> flightList = new ArrayList<>();
	
	public ArrayList<FlightDto> getDailyFlightList()
	{
		return flightList;
	}
	
	//The fixedDelay parameter determines how often a new day is generated as expressed in milliseconds
	@Scheduled(fixedDelay=180000)
	private void refreshFlights()
	{
		
		flightList = generator.generateNewFlightList();
		for(FlightDto x: flightList){
			System.out.println(x.getOrigin() + " -> " + x.getDestination());
		}
		
	}

	
	public List<List<FlightDto>> findRoutes(String origin, String destination) {
		List<FlightDto> scheduledFlights = flightList;
		List<List<FlightDto>> flightRoutes = new ArrayList<List<FlightDto>>();
		
		for(int i = 0; i < scheduledFlights.size(); i++) {
			
			if(scheduledFlights.get(i).getOrigin().equals(origin.toUpperCase())) {
				List<FlightDto> nonStop = new ArrayList<FlightDto>();
				
				if(scheduledFlights.get(i).getDestination().equals(destination.toUpperCase())) {
					nonStop.add(scheduledFlights.get(i));
					flightRoutes.add(nonStop);				
				} else {
					String stopOne = scheduledFlights.get(i).getDestination();
					
					for (int j = 0; j < scheduledFlights.size(); j++) {
						List<FlightDto> oneStop = new ArrayList<FlightDto>();
						
						if (scheduledFlights.get(j).getOrigin().equals(stopOne.toUpperCase()) &&
							scheduledFlights.get(j).getOffset() > (scheduledFlights.get(i).getOffset() + scheduledFlights.get(i).getFlightTime()+1)) {
							
							if(scheduledFlights.get(j).getDestination().equals(destination.toUpperCase())){
								oneStop.add(scheduledFlights.get(i));
								oneStop.add(scheduledFlights.get(j));
								flightRoutes.add(oneStop);
							}
							else {
								String stopTwo = scheduledFlights.get(j).getDestination();
								
								for (int g = 0; g < scheduledFlights.size(); g++){
									List<FlightDto> twoStops = new ArrayList<FlightDto>();
									
									if (scheduledFlights.get(g).getOrigin().equals(stopTwo.toUpperCase()) &&
											scheduledFlights.get(g).getOffset() > (scheduledFlights.get(j).getOffset() + scheduledFlights.get(j).getFlightTime()+1) &&
											scheduledFlights.get(g).getDestination().equals(destination.toUpperCase())){
										twoStops.add(scheduledFlights.get(i));
										twoStops.add(scheduledFlights.get(j));
										twoStops.add(scheduledFlights.get(g));
										flightRoutes.add(twoStops);
										
									}
								}
							}
							
						}
						
					}
				}
			}				
		}	    	   	
		return flightRoutes;
	}
	

	}
