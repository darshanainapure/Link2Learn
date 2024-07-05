package com.server2.server2.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "feedback")
public class Feedback {
    @Id
    private String id;
    private String username; // Change from userId to username
    private List<Integer> ratings;

    // Constructors, getters, and setters
    public Feedback() {
    }

    public Feedback(String username, List<Integer> ratings) {
        this.username = username;
        this.ratings = ratings;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Integer> getRatings() {
        return ratings;
    }

    public void setRatings(List<Integer> ratings) {
        this.ratings = ratings;
    }
}
