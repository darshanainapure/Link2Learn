package com.server2.server2.controller;

import com.server2.server2.model.UserProfile;
import com.server2.server2.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/customer")
public class UserProfileController {

    @Autowired
    private UserProfileService userProfileService;

    @GetMapping("/profile/{username}")
    public ResponseEntity<UserProfile> getUserProfile(@PathVariable String username) {
        Optional<UserProfile> userProfile = userProfileService.getUserProfileByUsername(username);
        return userProfile.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
