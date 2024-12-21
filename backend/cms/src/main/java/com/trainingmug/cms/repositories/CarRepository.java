package com.trainingmug.cms.repositories;

import com.trainingmug.cms.entities.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByNameContainingIgnoreCase(String name);
    List<Car> findByModelContainingIgnoreCase(String model);
    List<Car> findByYear(int year);
}
