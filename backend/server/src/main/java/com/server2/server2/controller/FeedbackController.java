package com.server2.server2.controller;

import com.server2.server2.model.Feedback;
import com.server2.server2.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public String submitFeedback(@RequestBody Feedback feedback) {
        feedbackService.saveFeedback(feedback);
        return "Feedback successfully submitted";
    }
}
