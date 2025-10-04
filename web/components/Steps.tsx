'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/**
 * Steps Section - Comment ça marche ?
 * Explique le processus en 3 étapes simples
 */
const Steps = () => {
  const steps = [
    {
      icon: <DownloadIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
      number: '01',
      title: 'Téléchargez l\'application',
      description: 'Disponible gratuitement sur Google Play et App Store. Installation rapide et simple.',
    },
    {
      icon: <SearchIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
      number: '02',
      title: 'Choisissez un service',
      description: 'Sélectionnez le type de réparation dont vous avez besoin et décrivez votre problème.',
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
      number: '03',
      title: 'Un professionnel intervient',
      description: 'Un technicien qualifié vous contacte rapidement et se déplace pour résoudre votre problème.',
    },
  ];

  return (
    <Box
      id="fonctionnement"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Comment ça marche ?
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 700, mx: 'auto' }}
          >
            Trois étapes simples pour résoudre tous vos problèmes de réparation
          </Typography>
        </motion.div>

        {/* Grille d'étapes */}
        <Grid container spacing={4} alignItems="stretch">
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 80
                }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, sm: 4 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    border: '2px solid',
                    borderColor: 'primary.light',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(13, 71, 161, 0.15)',
                    },
                  }}
                >
                  {/* Numéro de l'étape */}
                  <Typography
                    variant="h3"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      color: 'primary.light',
                      fontWeight: 700,
                      opacity: 0.3,
                    }}
                  >
                    {step.number}
                  </Typography>

                  {/* Icône */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Box sx={{ mb: 3, mt: 2 }}>{step.icon}</Box>
                  </motion.div>

                  {/* Titre */}
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                    {step.title}
                  </Typography>

                  {/* Description */}
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, lineHeight: 1.7 }}>
                    {step.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Steps;
