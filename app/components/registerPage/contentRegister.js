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
        <Typography className={styles.title}>
          Register
        </Typography>
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
