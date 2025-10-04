# Econstructiv - Landing Page 🇧🇯

Landing page officielle pour l'application mobile **Econstructiv**, dédiée aux services de réparation à domicile, en bureau et en magasin au Bénin.

## 🎯 À propos

Econstructiv connecte les clients avec des professionnels qualifiés pour tous types de réparations :
- Plomberie
- Électricité
- Peinture
- Climatisation
- Serrurerie
- Entretien général

## 🛠️ Technologies

- **Next.js 15** (App Router)
- **TypeScript**
- **Material UI v6** (MUI)
- **Emotion** (styling)
- **Framer Motion** (animations)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Démarrer en production
npm start
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le site.

## 📁 Structure du projet

```
econstructiv/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── privacy/page.tsx      # Politique de confidentialité
│   ├── contact/page.tsx      # Page contact
│   └── layout.tsx            # Layout principal avec MUI
├── components/
│   ├── Navbar.tsx            # Navigation sticky
│   ├── Hero.tsx              # Section hero
│   ├── Services.tsx          # Grille de services
│   ├── Advantages.tsx        # Avantages
│   ├── Steps.tsx             # Comment ça marche
│   ├── Testimonials.tsx      # Témoignages clients
│   ├── DownloadSection.tsx   # Section téléchargement
│   ├── Footer.tsx            # Pied de page
│   └── FloatingButtons.tsx   # Boutons WhatsApp/Support
├── public/
│   └── favicon.ico           # Favicon
├── theme.ts                  # Configuration thème MUI
└── package.json
```

## 🎨 Thème

Le site utilise un thème clair uniquement avec les couleurs suivantes :
- **Primaire** : `#0D47A1` (Bleu professionnel)
- **Secondaire** : `#4CAF50` (Vert confiance)
- **Fond** : `#FFFFFF`
- **Texte** : `#333333`
- **Police** : Inter / Roboto

## 📄 Pages

1. **Accueil (/)** - Landing page complète avec toutes les sections
2. **Politique de confidentialité (/privacy)** - Informations GDPR/CCPA
3. **Contact (/contact)** - Formulaire et informations de contact

## 🚀 Déploiement sur Vercel

```bash
# Le site est prêt pour Vercel
# Connectez simplement votre repo GitHub à Vercel
```

Le site est optimisé pour le SEO avec :
- Meta tags appropriés
- Structure sémantique HTML
- Performance optimisée
- Responsive design

## 📱 Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations au scroll avec Framer Motion
- ✅ Navigation sticky avec smooth scroll
- ✅ Boutons flottants WhatsApp et Support
- ✅ Formulaire de contact fonctionnel
- ✅ Thème MUI personnalisé
- ✅ Optimisé pour Vercel

## 📞 Contact

- **Email** : contact@econstructiv.bj
- **Adresse** : Cotonou, Bénin 🇧🇯
- **WhatsApp** : +229XXXXXXXX (à configurer)

## 📝 Configuration

Pour personnaliser le numéro WhatsApp, modifiez le fichier :
`components/FloatingButtons.tsx` ligne 15

Pour modifier les liens des stores (Google Play / App Store) :
`components/Hero.tsx` et `components/DownloadSection.tsx`

---

Développé avec ❤️ pour Econstructiv
