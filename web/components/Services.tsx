'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LockIcon from '@mui/icons-material/Lock';
import BuildIcon from '@mui/icons-material/Build';

/**
 * Services Section - Affiche les 6 services principaux d'Econstructiv
 * Grille responsive avec icônes et animations au scroll
 */
const Services = () => {
  const services = [
    {
      icon: <PlumbingIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Plomberie',
      description: 'Réparation de fuites, installation sanitaire, débouchage',
    },
    {
      icon: <ElectricalServicesIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Électricité',
      description: 'Installation électrique, dépannage, mise aux normes',
    },
    {
      icon: <FormatPaintIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Peinture',
      description: 'Peinture intérieure et extérieure, décoration murale',
    },
    {
      icon: <AcUnitIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Climatisation',
      description: 'Installation, entretien et réparation de climatiseurs',
    },
    {
      icon: <LockIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Serrurerie',
      description: 'Ouverture de porte, changement de serrure, blindage',
    },
    {
      icon: <BuildIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Entretien',
      description: 'Maintenance générale, petits travaux, rénovation',
    },
  ];

  return (
    <Box id="services" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
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
            Nos Services
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
          >
            Des professionnels qualifiés pour tous vos besoins de réparation et d'entretien
          </Typography>
        </motion.div>

        {/* Grille de services */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: { xs: 2, sm: 3 },
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(13, 71, 161, 0.2)',
                    }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  </motion.div>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                      {service.description}
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

export default Services;
