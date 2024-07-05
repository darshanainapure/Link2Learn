package com.server2.server2.service;

import com.server2.server2.model.UserProfile;
import com.server2.server2.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    public Optional<UserProfile> getUserProfileByUsername(String username) {
        return userProfileRepository.findByUsername(username);
    }
}
