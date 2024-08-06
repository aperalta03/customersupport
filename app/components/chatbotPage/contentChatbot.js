// components/ContentChatbot.js
import React from 'react';
import { Container, Box } from '@mui/material';
import Chatbox from './chatbox/chatbox';
import BottomChat from './bottomchat/bottomchat';
import RatingsCarousel from './ratings/ratings';
import styles from './contentChatbot.module.css';

const ContentChatbot = ({ handleLogout }) => {
  return (
    <Container className={styles.mainContainer}>
      <Box className={styles.chatContainer}>
        <Chatbox />
        <BottomChat handleLogout={handleLogout} />
      </Box>
      <Box className={styles.carouselContainer}>
        <RatingsCarousel />
      </Box>
    </Container>
  );
};

export default ContentChatbot;
