package com.weather.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.weather.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByUserLogin(String userLogin);

    UserEntity findByUserId(Integer id);

    Optional<UserEntity> findByUserEmail(String userEmail);

    UserEntity findByUserEmailCustomEntity(String userEmail);
}
