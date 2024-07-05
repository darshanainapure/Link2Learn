package com.server2.server2.service;

import com.server2.server2.model.Feedback;
import com.server2.server2.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;

    public void saveFeedback(Feedback feedback) {
        feedbackRepository.save(feedback);
    }
}
