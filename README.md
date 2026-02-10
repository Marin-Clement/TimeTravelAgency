# Time Travel Agency - Webapp Interactive

Application web interactive pour une agence de voyage temporel fictive, créée avec des outils IA génératives. Ce projet explore les possibilités du voyage dans le temps à travers une expérience utilisateur immersive et élégante.

## Description

Time Travel Agency est une landing page interactive qui propose des voyages temporels de luxe vers différentes époques historiques. L'application offre une expérience utilisateur complète avec recommandations personnalisées, système de réservation intégré et chatbot conversationnel.

## Stack Technique

### Frontend
- **React 18.3.1** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - Typage statique pour un code plus robuste
- **Vite 6.3.5** - Build tool ultra-rapide
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **Motion (Framer Motion) 12.23** - Animations fluides et interactions

### UI Components
- **Radix UI** - Composants accessibles et personnalisables
- **Lucide React** - Icônes modernes et élégantes
- **Recharts** - Graphiques et visualisations de données
- **Sonner** - Notifications toast élégantes

### Outils de développement
- **PostCSS** - Transformations CSS
- **shadcn/ui** - Collection de composants réutilisables

## Features Implémentées

### Interface Utilisateur
- **Hero Section** avec vidéo d'arrière-plan immersive
- **Navigation responsive** avec scroll-to-section
- **Animations parallax** et effets de particules
- **Design dark mode** avec palette luxury (or/brun)

### Destinations
- **Galerie de 5 destinations temporelles** :
  - Paris 1889 (Belle Époque)
  - Crétacé (Dinosaures)
  - Florence 1504 (Renaissance)
  - Rome Antique 44 av. J.-C.
  - Égypte Antique 2500 av. J.-C.
- **Cartes cliquables** qui scrollent vers le formulaire de réservation
- **Images haute qualité** avec fallback et lazy loading

### Intelligence Artificielle
- **Quiz personnalisé "Find Your Era"**
  - 3 questions pour déterminer la destination idéale
  - Algorithme de matching basé sur les préférences
  - Recommandation automatique avec scroll vers réservation
- **ChatBot conversationnel** (widget flottant)
  - Assistance en temps réel
  - Réponses contextuelles

### Système de Réservation
- **Formulaire intégré** avec :
  - Sélection de destination (pré-remplie depuis galerie ou quiz)
  - Sélecteur de date (avec validation)
  - Nombre de voyageurs (1-4)
  - Option d'assurance temporelle (+15%)
- **États de chargement** et confirmation animée
- **Génération d'ID de référence** unique

### Sections Additionnelles
- **Statistiques** (10K+ voyageurs, 50+ époques, 98% satisfaction)
- **Témoignages clients** avec système d'évaluation
- **Grille tarifaire** (3 plans : Explorer, Connoisseur, Legacy)
- **Newsletter** avec intégration email

### Expérience Utilisateur
- **Scroll smooth** entre les sections
- **Bouton CTA flottant** "Find Your Era" persistant
- **Animations on scroll** (reveal progressif)
- **Transitions fluides** entre les états
- **Responsive design** (mobile, tablette, desktop)

## Outils IA Utilisés

### IA dans l'Application (Features)
- **ChatBot conversationnel** - Assistant virtuel pour guider les utilisateurs (widget flottant)
- **Système de recommandation** - Algorithme de matching personnalisé via le quiz "Find Your Era"

### IA pour le Développement (Vibe-Coding)
- **GitHub Copilot** (Claude Sonnet 4.5) et **Cursor** - Génération de code, refactoring, optimisation des composants
- **Gemini Pro** - Génération des images

### Note de Transparence
Ce projet a été développé en **vibe-coding** avec assistance IA massive. Tous les composants UI ont été assemblés et personnalisés via IA, mais la logique métier, l'architecture applicative et le design system sont des créations guidées et validées humainement. L'IA a servi d'accélérateur de développement, pas de simple générateur.

## Installation

### Prérequis
- Node.js 18+ 
- npm ou pnpm

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/Marin-Clement/TimeTravelAgency.git
cd TimeTravelAgency
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Si erreur d'exécution PowerShell (Windows)**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

5. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

### Build pour production
```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers optimisés.

## Structure du Projet

```
TimeTravelAgency/
├── src/
│   ├── app/
│   │   └── App.tsx                 # Composant principal
│   ├── components/
│   │   ├── layout/                 # Navbar, Footer
│   │   ├── sections/               # Hero, Stats, Testimonials...
│   │   └── ui/                     # Composants réutilisables (shadcn)
│   ├── features/
│   │   ├── booking/                # Système de réservation
│   │   ├── chat/                   # ChatWidget IA
│   │   ├── destinations/           # Galerie de destinations
│   │   └── quiz/                   # Quiz personnalisé
│   ├── hooks/                      # Custom React hooks
│   ├── constants/                  # Données (destinations, prix...)
│   ├── types/                      # Types TypeScript
│   ├── styles/                     # CSS global et thème
│   └── public/                     # Assets (images, vidéos)
├── guidelines/                     # Documentation design
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Démonstration

### Features Clés en Action

1. **Clic sur destination** → Scroll automatique vers formulaire avec destination pré-sélectionnée
2. **Quiz "Find Your Era"** → Recommandation IA → Réservation en un clic
3. **Animations fluides** sur scroll et hover
4. **Vidéo hero immersive** avec overlay élégant

## Hébergement

- **Plateforme recommandée** : Vercel / Netlify
- **Configuration** : Build automatique depuis `main` branch
- **Commande de build** : `npm run build`
- **Dossier de sortie** : `dist`

## Crédits

### Assets & Ressources
- **Icônes** : [Lucide Icons](https://lucide.dev)
- **UI Components** : [shadcn/ui](https://ui.shadcn.com)
- **Fonts** : Google Fonts (Inter, Playfair Display)

### Technologies Open Source
- React, Vite, Tailwind CSS, Framer Motion
- Radix UI (composants accessibles)

### Inspiration
- Design moderne des agences de voyage de luxe
- Esthétique sci-fi et rétro-futuriste
- UX des plateformes de booking premium

## Licence

**Projet pédagogique** - M1 Expert en développpement Full Stack  
YNOV Campus - Année 2025-2026

Ce projet est développé dans un cadre éducatif.

---

## Auteur

Développé par Clément MARIN, Hélios MARTIN et Alexandre TESTA