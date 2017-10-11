package com.cooksys.mapper;

import org.mapstruct.Mapper;

import com.cooksys.entity.Client;
import com.cooksys.pojo.Credentials;

@Mapper(componentModel = "spring")
public interface ClientMapper {
	
	Client fromCred (Credentials credentials);

}
