'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink, Stack } from '@mui/material';
import Link from 'next/link';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

/**
 * Footer - Pied de page avec liens et informations de contact
 * Contient les liens de navigation, coordonnées et copyright
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo et description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <BuildIcon sx={{ fontSize: 32, mr: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Econstructiv
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Votre plateforme de confiance pour tous vos besoins de réparation et d'entretien à domicile, en bureau et en magasin au Bénin.
            </Typography>
          </Grid>

          {/* Liens rapides */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Liens rapides
            </Typography>
            <Stack spacing={1}>
              <MuiLink
                component={Link}
                href="/"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                Accueil
              </MuiLink>
              <MuiLink
                component={Link}
                href="/privacy"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                Politique de confidentialité
              </MuiLink>
              <MuiLink
                component={Link}
                href="/contact"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
              >
                Contact
              </MuiLink>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ fontSize: 20, mr: 1, opacity: 0.9 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Cotonou, Bénin 🇧🇯
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 20, mr: 1, opacity: 0.9 }} />
                <MuiLink
                  href="mailto:contact@econstructiv.bj"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  contact@econstructiv.bj
                </MuiLink>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Copyright © {currentYear} Econstructiv. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
