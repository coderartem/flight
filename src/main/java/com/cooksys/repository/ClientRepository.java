package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.entity.Client;
import com.cooksys.pojo.Credentials;

public interface ClientRepository extends JpaRepository<Client, Integer > {
		
	Client findByCredentials(Credentials cred);

	Client findByCredentialsLogin(String login);
}
