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
        <Box className={styles.titleContainer}>
          <Typography className={styles.title}>
            Robinhood.ai
          </Typography>
          <img src="/_next/static/media/robinhoodlogo.27f420a9.png" alt="Robinhood" className={styles.logo} />
        </Box>
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
