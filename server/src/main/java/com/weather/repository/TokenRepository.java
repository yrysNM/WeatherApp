package com.weather.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.weather.entity.TokenEntity;

@Repository
public interface TokenRepository extends JpaRepository<TokenEntity, Integer> {

  @Query(value = """
      select t from token t inner join users u\s
      on t.user_id = u.user_id\s
      where u.user_id = (select user_id from token where id = :id) and (t.expired = false or t.revoked = false)\s
      """, nativeQuery = true)
  List<TokenEntity> findAllValidTokenByUser(Integer id);

  Optional<TokenEntity> findByToken(String token);
}