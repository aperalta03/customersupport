// app/components/loginPage/ContentLogin.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import LoginFields from './loginFields/loginfields';
import Buttons from './buttons/buttons';
import Footer from '../footer/footer';
import styles from './contentLogin.module.css';

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
        <Buttons 
          handleEmailLogin={handleEmailLogin} 
          handleGoogleLogin={handleGoogleLogin} 
        />
        <Box className={styles.blurOne}></Box>
        <Box className={styles.blurTwo}></Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContentLogin;
