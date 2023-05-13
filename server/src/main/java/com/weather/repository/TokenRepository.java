package com.weather.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.weather.entity.TokenEntity;

@Repository
public interface TokenRepository extends JpaRepository<TokenEntity, Integer> {

  // @Query(value = """
  // select id, expired, revoked, token, token_type, t.user_id from token t inner
  // join users u\s
  // on t.user_id = u.user_id\s
  // where u.user_id = (select user_id from token where id = :id) and (t.expired =
  // false or t.revoked = false)\s
  // """, nativeQuery = true)

  // TODO -> convert QUERY to TokenEntityDto.java
  @Query(value = """
      select id, expired, revoked, token, token_type, t.user_id from token t inner
      join users u\s
      on t.user_id = u.user_id\s
      where u.user_id = :id and (t.expired = false or t.revoked = false)\s
      """, nativeQuery = true)
  public List<TokenEntity> findAllValidTokenByUser(Integer id);

  Optional<TokenEntity> findByToken(String token);
}