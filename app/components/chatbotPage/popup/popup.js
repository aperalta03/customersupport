// components/common/Popup.js
import React from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';
import styles from './popup.module.css';

const Popup = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="welcome-modal-title"
      aria-describedby="welcome-modal-description"
    >
      <Box className={styles.modalContent}>
        <Typography id="welcome-modal-title" variant="h6" component="h2">
          Welcome to Support.ai
        </Typography>
        <Typography id="welcome-modal-description" sx={{ mt: 2 }}>
          This chatbot is designed to assist you with your queries. You can ask about the services we provide, request support, or simply explore the capabilities of our AI.
        </Typography>
        <Button onClick={handleClose} className={styles.closeButton}>
          Got it!
        </Button>
      </Box>
    </Modal>
  );
};

export default Popup;
