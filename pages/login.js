import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../app/firebase';
import ContentLogin from '../app/components/loginPage/contentLogin';
import styles from './login.module.css';
import Footer from '../app/components/footer/footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/chatbot');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
      console.error('Error during login', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/chatbot');
    } catch (error) {
      setError('Failed to log in with Google.');
      console.error('Error during Google login', error);
    }
  };

  return (
    <Container className={styles.container} maxWidth={false}>
      <ContentLogin
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        handleEmailLogin={handleEmailLogin}
        handleGoogleLogin={handleGoogleLogin}
      />
    </Container>
  );
};

export default LoginPage;
