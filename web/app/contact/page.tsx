'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

/**
 * Page Contact
 * Formulaire de contact et informations de contact
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envoyer par email (mailto)
    const subject = encodeURIComponent(`Contact de ${formData.name}`);
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:contact@econstructiv.bj?subject=${subject}&body=${body}`;
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Contenu principal */}
      <Box component="main" sx={{ flex: 1, py: 8, pt: { xs: 12, sm: 14 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" color="primary" align="center" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Contactez-nous
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Une question ? Besoin d'aide ? Notre équipe est là pour vous
          </Typography>

          <Grid container spacing={4}>
            {/* Formulaire de contact */}
            <Grid item xs={12} md={7}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Envoyez-nous un message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Nom complet"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                    />
                    <TextField
                      fullWidth
                      label="Adresse e-mail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { fontSize: { xs: '0.9rem', sm: '1rem' } } }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Envoyer
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Grid>

            {/* Informations de contact */}
            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                {/* WhatsApp */}
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WhatsAppIcon sx={{ fontSize: 40, color: '#25D366', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      WhatsApp
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Discutez avec notre équipe support en temps réel
                  </Typography>
                  <Button
                    variant="outlined"
                    href="https://wa.me/229XXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#25D366', borderColor: '#25D366', '&:hover': { borderColor: '#128C7E', backgroundColor: 'rgba(37, 211, 102, 0.04)' } }}
                  >
                    Ouvrir WhatsApp
                  </Button>
                </Paper>

                {/* Email */}
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Email
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Envoyez-nous un email, nous répondons sous 24h
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    contact@econstructiv.bj
                  </Typography>
                </Paper>

                {/* Adresse */}
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Adresse
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Notre siège social au Bénin
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Cotonou, Bénin 🇧🇯
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />

      {/* Boutons flottants */}
      <FloatingButtons />
    </Box>
  );
}
