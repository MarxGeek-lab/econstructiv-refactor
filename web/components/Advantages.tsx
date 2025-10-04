'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

/**
 * Advantages Section - Pourquoi choisir Econstructiv
 * Met en avant les 4 avantages clés de la plateforme
 */
const Advantages = () => {
  const advantages = [
    {
      icon: <SpeedIcon sx={{ fontSize: 56, color: 'secondary.main' }} />,
      title: 'Rapidité',
      description: 'Intervention rapide de nos techniciens. Trouvez un professionnel disponible en quelques minutes.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 56, color: 'secondary.main' }} />,
      title: 'Fiabilité',
      description: 'Tous nos professionnels sont vérifiés et évalués par la communauté pour garantir un service de qualité.',
    },
    {
      icon: <StarIcon sx={{ fontSize: 56, color: 'secondary.main' }} />,
      title: 'Techniciens Certifiés',
      description: 'Des artisans qualifiés et expérimentés, formés aux meilleures pratiques de leur métier.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 56, color: 'secondary.main' }} />,
      title: 'Support Client 24/7',
      description: 'Notre équipe est disponible à tout moment pour répondre à vos questions et vous accompagner.',
    },
  ];

  return (
    <Box
      id="avantages"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%)',
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
            Pourquoi nous choisir ?
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
          >
            Econstructiv vous offre une expérience unique et sécurisée pour tous vos besoins de réparation
          </Typography>
        </motion.div>

        {/* Grille d'avantages */}
        <Grid container spacing={4}>
          {advantages.map((advantage, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 120
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: { xs: 2.5, sm: 3 },
                    backgroundColor: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(76, 175, 80, 0.2)',
                    }
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{advantage.icon}</Box>
                  </motion.div>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                      {advantage.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, lineHeight: 1.7 }}>
                      {advantage.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Advantages;
