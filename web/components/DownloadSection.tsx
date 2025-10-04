'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

/**
 * DownloadSection - Section de rappel pour télécharger l'application
 * Encourage les utilisateurs à télécharger l'app
 */
const DownloadSection = () => {
  return (
    <Box
      id="download"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #0D47A1 0%, #4CAF50 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Prêt à simplifier vos réparations ?
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, opacity: 0.95 }}
            >
              Téléchargez Econstructiv maintenant et trouvez un professionnel en quelques clics
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ justifyContent: 'center' }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AndroidIcon />}
                  href="https://play.google.com"
                  target="_blank"
                  sx={{
                    px: 4,
                    py: 1.5,
                    backgroundColor: 'white',
                    color: 'primary.main',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  Télécharger sur Google Play
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<AppleIcon />}
                  href="https://apps.apple.com"
                  target="_blank"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Télécharger sur App Store
                </Button>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>
      </Container>

      {/* Éléments décoratifs */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -80,
          right: -80,
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
        }}
      />
    </Box>
  );
};

export default DownloadSection;
