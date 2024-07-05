package com.server2.server2.controller;

import com.server2.server2.model.Result;
import com.server2.server2.repository.ResultRepository;

import com.server2.server2.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results") // Change to lower case 'results'
public class ResultController {

    @Autowired
    private ResultRepository resultRepository;

    @GetMapping
    public List<Result> getAllResults() {
        return resultRepository.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<Result> getResultsByUserId(@PathVariable String userId) {
        return resultRepository.findByUserId(userId);
    }

    @PostMapping
    public Result createResult(@RequestBody Result result) {
        return resultRepository.save(result);
    }

    @DeleteMapping("/{id}")
    public void deleteResult(@PathVariable String id) {
        resultRepository.deleteById(id);
    }
}
