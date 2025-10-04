'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

/**
 * Page Politique de confidentialité
 * Affiche la politique de confidentialité d'Econstructiv
 */
export default function PrivacyPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Contenu principal */}
      <Box component="main" sx={{ flex: 1, py: 8, pt: { xs: 12, sm: 14 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h2" color="primary" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
            Politique de confidentialité
          </Typography>

          <Box sx={{ '& h4': { mt: 4, mb: 2, fontWeight: 600, color: 'primary.main' }, '& p': { mb: 2, lineHeight: 1.8 } }}>
            <Typography variant="body1" paragraph>
              Bienvenue sur <strong>Econstructiv.co</strong>, où nous nous efforçons de vous offrir une expérience transparente, efficace et personnalisée, adaptée à vos besoins. Pour ce faire, nous traitons certaines informations de manière responsable et transparente. En continuant à utiliser notre plateforme, vous reconnaissez et acceptez ces pratiques, conçues pour améliorer votre expérience avec Econstructiv.co.
            </Typography>

            <Typography variant="h4" component="h4">
              1. Les informations qui alimentent votre expérience
            </Typography>
            <Typography variant="body1" paragraph>
              Nous traitons les données pour assurer l'efficacité, la sécurité et la personnalisation des services que nous offrons.
            </Typography>
            <Typography variant="body1" paragraph>
              Ce que vous partagez avec nous : Pour créer une expérience sans friction, nous pouvons vous demander vos préférences de profil, vos demandes de service, vos détails de paiement et vos interactions avec le service d'assistance.
            </Typography>
            <Typography variant="body1" paragraph>
              Ce que nous optimisons automatiquement : Nous recueillons des informations sur les appareils, des données d'utilisation et des journaux de contrôle de sécurité afin d'améliorer votre expérience et de prévenir la fraude.
            </Typography>
            <Typography variant="body1" paragraph>
              Comment nos partenaires de confiance nous aident : Nous travaillons avec des processeurs de paiement, des services d'authentification et des fournisseurs de vérification pour assurer des transactions fluides et la sécurité de la plateforme.
            </Typography>

            <Typography variant="h4" component="h4">
              2. Les avantages pour vous
            </Typography>
            <Typography variant="body1" paragraph>
              En comprenant comment vous interagissez avec Econstructiv.co, nous pouvons personnaliser votre expérience, assurer des transactions sécurisées, détecter les activités frauduleuses, améliorer les fonctionnalités du service et fournir des mises à jour pertinentes. Vos informations ne sont jamais vendues et nous ne travaillons qu'avec des partenaires vérifiés indispensables à l'optimisation du service.
            </Typography>

            <Typography variant="h4" component="h4">
              3. Votre contrôle, votre choix
            </Typography>
            <Typography variant="body1" paragraph>
              Pour les utilisateurs de l'UE, du Royaume-Uni et de l'EEE (GDPR) : Vous pouvez accéder, modifier, supprimer et gérer vos données, et demander une copie ou ajuster les paramètres de consentement à tout moment.
            </Typography>
            <Typography variant="body1" paragraph>
              Pour les utilisateurs américains (CCPA, CPRA, autres lois nationales) : Vous avez le droit de savoir quelles données sont collectées, de demander leur suppression, de refuser le partage des données et de limiter l'utilisation des données sensibles.
            </Typography>
            <Typography variant="body1" paragraph>
              Pour gérer vos préférences, contactez-nous à l'adresse contact@econstructiv.bj.
            </Typography>

            <Typography variant="h4" component="h4">
              4. Sécurité et confidentialité de vos données
            </Typography>
            <Typography variant="body1" paragraph>
              Nous prenons la sécurité au sérieux et utilisons le cryptage, les contrôles d'accès et la surveillance continue pour protéger vos informations. Les données ne sont conservées qu'à des fins de prestation de services, de respect de la législation et de prévention de la fraude, et sont supprimées en toute sécurité lorsqu'elles ne sont plus nécessaires.
            </Typography>

            <Typography variant="h4" component="h4">
              5. Qui d'autre nous aide à mieux vous servir ?
            </Typography>
            <Typography variant="body1" paragraph>
              Nous nous associons à des tiers de confiance, tels que des passerelles de paiement, des prestataires de services techniques, des outils d'analyse et des experts en sécurité, afin de maintenir une expérience de haute qualité. Chaque partenaire respecte des accords de confidentialité stricts afin de protéger votre vie privée.
            </Typography>

            <Typography variant="h4" component="h4">
              6. Vos paramètres de personnalisation
            </Typography>
            <Typography variant="body1" paragraph>
              Nous utilisons des technologies de suivi intelligentes telles que les cookies et les outils d'analyse pour reconnaître les préférences, optimiser les services, prévenir la fraude et améliorer les performances. Vous pouvez à tout moment modifier vos préférences en matière de cookies par le biais des paramètres de votre navigateur.
            </Typography>

            <Typography variant="h4" component="h4">
              7. Normes mondiales de protection de la vie privée
            </Typography>
            <Typography variant="body1" paragraph>
              Vos données peuvent être traitées dans différentes régions. Nous nous y conformons en utilisant des clauses contractuelles types (CCN), des alternatives au bouclier de protection de la vie privée et des garanties légalement reconnues pour protéger vos droits.
            </Typography>

            <Typography variant="h4" component="h4">
              8. Rester informé
            </Typography>
            <Typography variant="body1" paragraph>
              Nous mettons régulièrement à jour la présente politique de confidentialité. En cas de changement : Un avis sera publié sur notre plateforme. Vous pouvez recevoir une notification directe si nécessaire. En continuant à utiliser notre site, vous restez informé de nos dernières pratiques.
            </Typography>

            <Typography variant="h4" component="h4">
              9. Besoin d'aide ? Parlons-en
            </Typography>
            <Typography variant="body1" paragraph>
              Courriel : contact@econstructiv.bj<br />
              Adresse : Cotonou, Bénin 🇧🇯<br />
              Nous apprécions votre confiance et nous nous engageons à faire d'Econstructiv.co une plateforme sécurisée et intuitive.
            </Typography>

            <Typography variant="body1" paragraph sx={{ mt: 4, fontWeight: 600 }}>
              Points forts de la conformité<br />
              • GDPR (UE, Royaume-Uni, EEE, Suisse)<br />
              • CCPA, CPRA (Californie, États-Unis) et autres lois des États-Unis<br />
              • Règles de Google Play et de l'Apple App Store<br />
              • Normes de sécurité de l'industrie
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />

      {/* Boutons flottants */}
      <FloatingButtons />
    </Box>
  );
}
