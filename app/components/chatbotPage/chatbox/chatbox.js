import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import styles from './chatbox.module.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      setMessages([...newMessages, { sender: "bot", text: data.botMessage }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Box className={styles.chatContainer}>
        <Box className={styles.backgroundTextContainer}>
            <Typography className={styles.backgroundText}>Support.ai</Typography>
        </Box>
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
        <Box className={styles.inputContainer}>
            <TextField
            className={styles.inputBox}
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(18, 131, 48, 0.7)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(18, 131, 48, 0.7)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(4, 143, 34)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', 
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'rgb(4, 143, 34)', 
                },
                '& .MuiInputBase-input': {
                  color: '#ccc',
                  '&::placeholder': {
                    color: 'white', 
                    fontFamily: 'Courier New, monospace',
                    opacity: 1,
                  },
                },
              }}
            />
            <Button onClick={handleSendMessage} className={styles.sendButton}>
                Send
            </Button>
        </Box>
    </Box>
  );
};

export default Chatbox;
