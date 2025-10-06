'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';

/**
 * Hero Section - Section principale avec slogan et boutons de téléchargement
 * Animations avec Framer Motion pour un effet moderne et attractif
 */
const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 50%, #E8F5E9 100%)',
        py: { xs: 12, sm: 16 },
        pt: { xs: 16, sm: 20 },
        position: 'relative',
        overflow: 'hidden',
        // minHeight: { xs: '85vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Contenu texte */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
              <Stack direction="row" spacing={1} sx={{ mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Chip
                  icon={<VerifiedIcon />}
                  label="100% Vérifié"
                  color="secondary"
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
                <Chip
                  icon={<StarIcon />}
                  label="4.8/5 ⭐"
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                color="primary"
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #0D47A1 0%, #4CAF50 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Simplifiez vos réparations à domicile avec Econstructiv
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.8, fontWeight: 400, fontSize: '16px' }}
              >
                Trouvez un professionnel qualifié pour vos travaux de plomberie,
                électricité, climatisation, peinture et plus encore — en un clic. 🇧🇯
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ justifyContent: { xs: 'center', md: 'flex-start' }, mb: 3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<AndroidIcon />}
                    href="https://play.google.com"
                    target="_blank"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 8px 24px rgba(13, 71, 161, 0.3)',
                      '&:hover': {
                        boxShadow: '0 12px 32px rgba(13, 71, 161, 0.4)',
                      }
                    }}
                  >
                    Télécharger sur Google Play
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<AppleIcon />}
                    href="https://apps.apple.com"
                    target="_blank"
                    sx={{ whiteSpace: 'nowrap', px: 4, py: 1.5, borderWidth: 2 }}
                  >
                    Télécharger sur App Store
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                ✓ Gratuit à télécharger • ✓ Techniciens certifiés • ✓ Support 24/7
              </Typography>
            </motion.div>
          </Box>

          {/* Image illustration */}
          <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, type: 'spring' }}
              style={{ width: '100%' }}
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 450,
                    background: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 50%, #4CAF50 100%)',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    boxShadow: '0 30px 80px rgba(13, 71, 161, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    }
                  }}
                >
                  <Box sx={{ fontSize: '5rem', mb: 2 }}>🛠️</Box>
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 1, zIndex: 1 }}>
                    Technicien professionnel
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', zIndex: 1 }}>
                    À votre service 24/7
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Éléments décoratifs */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(13, 71, 161, 0.05)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(76, 175, 80, 0.05)',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default Hero;
