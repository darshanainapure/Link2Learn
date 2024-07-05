package com.server2.server2.repository;
import com.server2.server2.model.Result;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
public interface ResultRepository extends MongoRepository<Result, String> {
    List<Result> findByUserId(String userId);
}

