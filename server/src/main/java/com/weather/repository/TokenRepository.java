package com.weather.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.weather.entity.Token;

@Repository
public interface TokenRepository extends JpaRepository<Token, Integer> {

  @Query(value = """
      select t from token t inner join users u\s
      on t.users.user_id = u.user_id\s
      where u.user_id = :id and (t.expired = false or t.revoked = false)\s
      """, nativeQuery = true)
  List<Token> findAllValidTokenByUser(Integer id);

  Optional<Token> findByToken(String token);
}