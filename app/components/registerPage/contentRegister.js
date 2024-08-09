// app/components/registerPage/ContentRegister.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import RegisterFields from './registerfields/registerfields';
import Buttons from './buttons/buttons';
import Footer from '../footer/footer';
import styles from './contentRegister.module.css';

const ContentRegister = ({ email, setEmail, password, setPassword, error, handleRegister, handleLogin }) => {
  return (
    <>
      <Box className={styles.contentContainer}>
        <Box className={styles.titleContainer}>
          <Typography className={styles.title}>
            Robinhood.ai
          </Typography>
          <img src="/_next/static/media/robinhoodlogo.27f420a9.png" alt="Robinhood" className={styles.logo} />
        </Box>
        <RegisterFields 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
        />
        {error && <Typography color="error" className={styles.error}>{error}</Typography>}
        <Buttons handleRegister={handleRegister} handleLogin={handleLogin} />
        <Box className={styles.blurOne}></Box>
        <Box className={styles.blurTwo}></Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContentRegister;
