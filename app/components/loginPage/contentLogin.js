import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import styles from './contentLogin.module.css';
import LoginFields from './loginFields/loginfields';
import Footer from '../footer/footer';

const ContentLogin = ({ email, setEmail, password, setPassword, error, handleEmailLogin, handleGoogleLogin }) => {
  return (
    <>
      <Box className={styles.contentContainer}>
        <Typography className={styles.title}>
          Support.ai
        </Typography>
        <LoginFields 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
        />
        {error && <Typography className={styles.error}>{error}</Typography>}
        <Box className={styles.buttonContainer}>
          <Button className={styles.button} variant="contained" onClick={handleEmailLogin}>
            Login
          </Button>
          <Button className={styles.button} variant="contained" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
          <Button className={styles.button} component={Link} href="/register" variant="contained">
            Register
          </Button>
        </Box>
        <Box className={styles.blurOne}></Box>
        <Box className={styles.blurTwo}></Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContentLogin;
