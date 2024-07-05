package com.server2.server2.controller;

import com.server2.server2.model.Question;
import com.server2.server2.model.Result;
import com.server2.server2.repository.ResultRepository;
import com.server2.server2.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/questions") // Change to lower case 'questions'
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @GetMapping("/{id}")
    public Question getQuestionById(@PathVariable String id) {
        return questionRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return questionRepository.save(question);
    }

    @PutMapping("/{id}")
    public Question updateQuestion(@PathVariable String id, @RequestBody Question questionDetails) {
        Question question = questionRepository.findById(id).orElse(null);

        if (question != null) {
            question.setQuestionText(questionDetails.getQuestionText());
            question.setOptions(questionDetails.getOptions());
            question.setAnswer(questionDetails.getAnswer());
            return questionRepository.save(question);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable String id) {
        questionRepository.deleteById(id);
    }
}