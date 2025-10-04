'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

/**
 * Testimonials Section - Témoignages clients
 * Affiche les avis de clients satisfaits
 */
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marie Koudjo',
      role: 'Propriétaire',
      location: 'Cotonou',
      comment: 'Service excellent ! J\'ai trouvé un plombier en moins de 10 minutes. Il est arrivé rapidement et a résolu mon problème de fuite. Je recommande vivement Econstructiv !',
      avatar: 'M',
    },
    {
      name: 'Jean-Baptiste Soglo',
      role: 'Gérant de magasin',
      location: 'Porto-Novo',
      comment: 'Très professionnel. L\'électricien était compétent et courtois. Le système de notation m\'a aidé à choisir le bon technicien. Application très pratique !',
      avatar: 'J',
    },
    {
      name: 'Fatou Diallo',
      role: 'Responsable bureau',
      location: 'Parakou',
      comment: 'Une solution moderne pour nos besoins de maintenance. Le support client est réactif et les tarifs sont transparents. Econstructiv facilite vraiment la vie !',
      avatar: 'F',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #FFFFFF 0%, #E3F2FD 100%)',
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
            Ce que disent nos clients
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
          >
            Des milliers de clients satisfaits à travers le Bénin 🇧🇯
          </Typography>
        </motion.div>

        {/* Grille de témoignages */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: { xs: 2.5, sm: 3 },
                    position: 'relative',
                    backgroundColor: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(13, 71, 161, 0.15)',
                    }
                  }}
                >
                  {/* Icône de citation */}
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontSize: 48,
                      color: 'primary.light',
                      opacity: 0.2,
                    }}
                  />

                  <CardContent>
                    {/* Avatar et info client */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Avatar
                          sx={{
                            width: { xs: 48, sm: 56 },
                            height: { xs: 48, sm: 56 },
                            bgcolor: 'secondary.main',
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            fontWeight: 600,
                          }}
                        >
                          {testimonial.avatar}
                        </Avatar>
                      </motion.div>
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                          {testimonial.role} • {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Commentaire */}
                    <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', fontSize: { xs: '0.9rem', sm: '1rem' }, lineHeight: 1.7 }}>
                      "{testimonial.comment}"
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

export default Testimonials;
