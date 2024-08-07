// components/chatbox/Messages.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './messages.module.css';

const Messages = ({ messages }) => {
  return (
    <Box className={styles.messagesContainer}>
      {messages.map((msg, index) => (
        <Typography
          key={index}
          className={msg.sender === "user" ? styles.userMessage : styles.botMessage}
        >
          {msg.text}
        </Typography>
      ))}
    </Box>
  );
};

export default Messages;
