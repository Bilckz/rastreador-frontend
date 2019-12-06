package com.deolhonopacote.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deolhonopacote.apirest.models.Code;

public interface CodeRepository extends JpaRepository<Code, Long>{

	
	Code findById(long id);
}
