package com.server2.server2.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "results")
public class Result {
    @Id
    private String id;
    private String userId;
    private int score;

    // Getters and setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public void setUserId(String userId) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setScore(int score) {
        this.id = id;
    }

    public String getscore() {
        return userId;
    }


}

