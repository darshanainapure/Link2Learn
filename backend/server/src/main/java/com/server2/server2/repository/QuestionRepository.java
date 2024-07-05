package com.server2.server2.repository;
import com.server2.server2.model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, String> {
}

