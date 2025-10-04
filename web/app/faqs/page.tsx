'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

/**
 * Page FAQs - Questions fréquemment posées
 * Affiche les réponses aux questions courantes sur Econstructiv
 */
export default function FAQsPage() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 'panel1',
      question: 'Comment fonctionne Econstructiv ?',
      answer: 'Econstructiv est une plateforme qui vous met en relation avec des professionnels qualifiés pour vos besoins de réparation. Téléchargez l\'application, choisissez le service dont vous avez besoin, décrivez votre problème, et un technicien certifié vous contactera rapidement pour intervenir.',
    },
    {
      id: 'panel2',
      question: 'Les techniciens sont-ils vérifiés ?',
      answer: 'Oui, absolument ! Tous nos techniciens passent par un processus de vérification rigoureux. Nous vérifions leurs qualifications, leur expérience, et leurs certifications. De plus, chaque technicien est évalué par les clients après chaque intervention.',
    },
    {
      id: 'panel3',
      question: 'Quels types de services proposez-vous ?',
      answer: 'Nous proposons une large gamme de services : plomberie (réparation de fuites, installation sanitaire), électricité (installation, dépannage), climatisation (installation et entretien), peinture (intérieure et extérieure), serrurerie (ouverture de porte, changement de serrure), et entretien général.',
    },
    {
      id: 'panel4',
      question: 'Combien coûte l\'utilisation de l\'application ?',
      answer: 'L\'application Econstructiv est totalement gratuite à télécharger et à utiliser. Vous ne payez que pour le service du technicien. Les tarifs sont transparents et vous sont communiqués avant toute intervention. Aucun frais caché !',
    },
    {
      id: 'panel5',
      question: 'Dans quelles villes êtes-vous disponibles ?',
      answer: 'Econstructiv est actuellement disponible dans les principales villes du Bénin, notamment Cotonou, Porto-Novo, Parakou, et d\'autres villes. Nous travaillons activement à étendre notre couverture à l\'ensemble du territoire béninois.',
    },
    {
      id: 'panel6',
      question: 'Quel est le délai d\'intervention ?',
      answer: 'Notre objectif est de vous mettre en relation avec un technicien dans les plus brefs délais. En moyenne, vous recevez une réponse en moins de 10 minutes. Le délai d\'intervention dépend de la disponibilité du technicien et de votre localisation, mais nous nous efforçons d\'intervenir le jour même pour les urgences.',
    },
    {
      id: 'panel7',
      question: 'Comment puis-je payer pour les services ?',
      answer: 'Nous acceptons plusieurs modes de paiement pour votre confort : paiement en espèces directement au technicien, paiement mobile (Mobile Money), et carte bancaire via l\'application. Tous les paiements sont sécurisés.',
    },
    {
      id: 'panel8',
      question: 'Que faire si je ne suis pas satisfait du service ?',
      answer: 'Votre satisfaction est notre priorité. Si vous n\'êtes pas satisfait du service, contactez notre support client disponible 24/7. Nous examinerons votre cas et prendrons les mesures nécessaires. Vous pouvez également laisser un avis pour aider les autres utilisateurs.',
    },
    {
      id: 'panel9',
      question: 'L\'application est-elle disponible sur iOS et Android ?',
      answer: 'Oui ! Econstructiv est disponible sur Google Play Store pour Android et sur l\'App Store pour iOS. Téléchargez l\'application gratuitement et commencez à trouver des professionnels qualifiés en quelques clics.',
    },
    {
      id: 'panel10',
      question: 'Comment contacter le support client ?',
      answer: 'Notre équipe support est disponible 24/7 pour vous aider. Vous pouvez nous contacter par email à contact@econstructiv.bj, via WhatsApp, ou directement depuis l\'application. Nous répondons généralement en moins de 2 heures.',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Contenu principal */}
      <Box component="main" sx={{ flex: 1, py: 8, pt: 12, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" color="primary" align="center" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
              Questions Fréquemment Posées
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
              Trouvez les réponses à vos questions sur Econstructiv
            </Typography>
          </motion.div>

          <Box sx={{ mb: 4 }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Accordion
                  expanded={expanded === faq.id}
                  onChange={handleChange(faq.id)}
                  sx={{
                    mb: 2,
                    '&:before': { display: 'none' },
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    borderRadius: 2,
                    '&.Mui-expanded': {
                      boxShadow: '0 4px 16px rgba(13, 71, 161, 0.15)',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      '& .MuiAccordionSummary-content': {
                        my: 2,
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>

          {/* Section contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Box
              sx={{
                mt: 6,
                p: 4,
                background: 'linear-gradient(135deg, #E3F2FD 0%, #E8F5E9 100%)',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Vous n'avez pas trouvé votre réponse ?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Notre équipe support est là pour vous aider 24/7
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Typography variant="body2" color="text.secondary">
                  📧 contact@econstructiv.bj
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  💬 WhatsApp disponible
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />

      {/* Boutons flottants */}
      <FloatingButtons />
    </Box>
  );
}
