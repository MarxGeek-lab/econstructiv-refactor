'use client';

import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

/**
 * Page d'accueil - Landing page principale d'Econstructiv
 * Contient toutes les sections : Hero, Services, Avantages, Fonctionnement, Témoignages, Téléchargement
 */
export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Contenu principal */}
      <Box component="main" sx={{ flex: 1, pt: { xs: '64px', sm: '70px' } }}>
        {/* Section Hero */}
        <Hero />

        {/* Section Services */}
        <Services />

        {/* Section Avantages */}
        <Advantages />

        {/* Section Fonctionnement */}
        <Steps />

        {/* Section Témoignages */}
        <Testimonials />

        {/* Section Téléchargement */}
        <DownloadSection />
      </Box>

      {/* Footer */}
      <Footer />

      {/* Boutons flottants WhatsApp et Support */}
      <FloatingButtons />
    </Box>
  );
}
