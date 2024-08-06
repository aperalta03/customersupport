// pages/register.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../app/firebase'; // Adjust path if necessary
import styles from "./register.module.css";
import Footer from '@/app/components/footer/footer';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/chatbot'); // Redirect to chatbot page after registration
    } catch (error) {
      setError('Failed to register. Please try again.');
      console.error('Error during registration', error);
    }
  };

  const handleLogin = async () => {
    router.push('/login')
  };

  return (
    <Container className={styles.container} maxWidth={false}>
      <Typography className={styles.title}>
        Register
      </Typography>
      <Box className={styles.TextField} margin={'40px'}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#333', // Initial border color
            },
            '&:hover fieldset': {
                borderColor: 'rgba(18, 131, 48, 0.7)', // Hover border color
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(4, 143, 34)', // Focused border color
            },
            },
            '& .MuiInputLabel-root': {
            color: 'white', // Label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
            color: 'rgb(4, 143, 34)', // Label color when focused
            },
            '& .MuiInputBase-input': {
                color: 'white', // Text color inside the input
            },
        }}
        />
        <TextField className={styles.bloque}
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#333', // Initial border color
            },
            '&:hover fieldset': {
                borderColor: 'rgba(18, 131, 48, 0.7)', // Hover border color
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(4, 143, 34)', // Focused border color
            },
            },
            '& .MuiInputLabel-root': {
            color: 'white', // Label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
            color: 'rgb(4, 143, 34)', // Label color when focused
            },
            '& .MuiInputBase-input': {
                color: 'white', // Text color inside the input
            },
        }}
        />
      </Box>
      {error && <Typography color="error">{error}</Typography>}
      <Box className={styles.buttonContainer}>
        <Button  className={styles.button} variant="contained" color="primary" onClick={handleRegister}>
        Register
       </Button>
        <Button className={styles.button} variant='contained' color='primary' onClick={handleLogin}>
          Login
        </Button>
      </Box>
      <Box className={styles.blurOne}></Box>
      <Box className={styles.blurTwo}></Box>
      <Box className={styles.abajo}>
        <Footer/>
      </Box>
    </Container>
    
  );
};

export default RegisterPage;
