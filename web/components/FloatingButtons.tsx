'use client';

import React from 'react';
import { Fab, Tooltip, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

/**
 * FloatingButtons - Boutons flottants pour WhatsApp et Support
 * Positionnés en bas à droite de l'écran
 */
const FloatingButtons = () => {
  // Numéro WhatsApp (à remplacer par le vrai numéro)
  const whatsappNumber = '229XXXXXXXX';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const supportEmail = 'contact@econstructiv.bj';

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 24 },
        right: { xs: 16, md: 24 },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        zIndex: 1000,
      }}
    >
      {/* Bouton Support Email */}
      <Tooltip title="Contacter le support" placement="left">
        <Fab
          color="primary"
          aria-label="support"
          href={`mailto:${supportEmail}`}
          sx={{
            width: 56,
            height: 56,
            boxShadow: '0 4px 20px rgba(13, 71, 161, 0.4)',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0 6px 28px rgba(13, 71, 161, 0.5)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <SupportAgentIcon />
        </Fab>
      </Tooltip>

      {/* Bouton WhatsApp */}
      <Tooltip title="Discuter sur WhatsApp" placement="left">
        <Fab
          aria-label="whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 56,
            height: 56,
            backgroundColor: '#25D366',
            color: 'white',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            '&:hover': {
              backgroundColor: '#128C7E',
              transform: 'scale(1.1)',
              boxShadow: '0 6px 28px rgba(37, 211, 102, 0.5)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default FloatingButtons;
