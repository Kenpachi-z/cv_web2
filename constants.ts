
import { ResumeData } from './types';

export const THEME_COLOR = '#831010'; 
export const BRAND_RED = '#C60018'; 
export const DEEP_DARK = '#121212'; 
export const ACCESSIBLE_DARK_GRAY = '#2D2D2D'; 
export const ICON_COLOR = '#831010'; 

export const GRADIENT_PRIMARY = 'linear-gradient(135deg, #831010 0%, #4a0909 100%)';
export const GRADIENT_SUBTLE = 'linear-gradient(90deg, #831010 0%, rgba(131, 16, 16, 0) 100%)';

export const RESUME_DATA: ResumeData = {
  name: "Robert KABA",
  title: "Product Owner / Chef de Projet Digital (Espace Client)",
  profile: "Profil hybride alliant expertise technologique et vision produit. Expérimenté dans le pilotage de projets digitaux au sein d'environnements fortement réglementés (secteur public, banque, assurance). J'accompagne la transformation des espaces clients (Espace Client) en coordonnant les équipes techniques et métiers, avec une approche pragmatique centrée sur la qualité (recette), la conformité et l'optimisation continue de l'expérience utilisateur (UX).",
  contact: {
    location: "Paris",
    phone: "06 27 35 03 02",
    email: "robert.kaba@outlook.com",
    linkedin: "linkedin.com/in/robert-kaba"
  },
  experiences: [
    {
      title: "Consultant Chef de Projet Solution Applicative",
      company: "CGI — ESN",
      period: "Depuis 2023",
      missions: [
        {
          title: "Chef de projet / Responsable Recette",
          client: "Ministère de l'Intérieur (SHFD)",
          period: "Novembre 2025 – Présent",
          highlights: [
            "Gouvernance : Pilotage de projet, animation COPIL/COMOP et coordination transverse MOA/MOE/TMA.",
            "Qualité & Recette : Cadrage de la recette fonctionnelle, gestion des releases et préparation des jalons Go/No-Go pour sécuriser les mises en production.",
            "Pragmatisme digital : Mise en place rapide d’un MVP (Supabase/IA) pour automatiser des workflows et limiter l’impact sur les opérations métiers."
          ]
        },
        {
          title: "Chef de Projet Déploiement",
          client: "Ministère de l'Intérieur (PFSF)",
          period: "Juillet 2025 – Octobre 2025",
          highlights: [
            "Déploiement : Pilotage du déploiement et validation fonctionnelle des équipements sur les plateformes aéroportuaires (Roissy-CDG et Orly).",
            "Solutions mobiles : Extension du périmètre aux solutions tablettes pour zones portuaires et gares intermodales.",
            "Pilotage : Suivi tableau de bord opérationnel et traçabilité des interventions (anomalies software/hardware)."
          ]
        },
        {
          title: "Chef de Projet",
          client: "Ministère du Travail",
          period: "Août 2024 – Mars 2025",
          highlights: [
            "Gestion de Backlog & MCO : Suivi des évolutions et priorisation des tickets d'anomalies sous Jira en lien direct avec la TMA.",
            "Parcours Utilisateur : Participation à l’étude UX pour la refonte du SI et optimisation continue des flux métiers.",
            "Expertise Technique : Support de niveau 2, résolution d'incidents complexes (lecture de logs, requêtes SQL).",
            "Sécurité : Collaboration avec les équipes RGPD et RSSI pour garantir la protection des données."
          ]
        },
        {
          title: "Webmaster",
          client: "Ministère de l'Intérieur (ANTS)",
          period: "Avril 2023 – Avril 2024",
          highlights: [
            "Vision Produit : Supervision du portail ANTS, définition de sa roadmap, recueil des besoins et pilotage de l'AMOA.",
            "Analyse Data / UX : Étude du comportement des internautes via tableaux de bord pour améliorer les parcours self-service.",
            "Qualité & Recette : Rédaction de la stratégie de recette, tests de non-régression et supervision des mises en production.",
            "Support : Animation des équipes en charge des tickets liés au portail et remontée des \"points de douleur\" usagers."
          ]
        }
      ]
    },
    {
      title: "Expert Monétique (Digital)",
      company: "BNP Paribas",
      period: "Avril 2021 – Mai 2022",
      highlights: [
        "Développement Produit Mobile : Rédaction de la stratégie et du cahier de recette pour la nouvelle fonctionnalité de récupération de code secret sur l'application bancaire.",
        "Gestion des risques : Mesure des impacts incidents, avec escalade et gestion proactive pour minimiser les effets sur les clients."
      ]
    },
    {
      title: "Référent Digital & Conduite du Changement",
      company: "PMU",
      period: "Sept. 2011 – Octobre 2018",
      highlights: [
        "Transformation digitale : Participation active à la refonte UX des interfaces digitales (web et app mobile) via l'animation d'ateliers métiers.",
        "Impact KPI : Réduction de 30% des demandes récurrentes grâce à l'optimisation des parcours utilisateurs et l'enrichissement ciblé de la FAQ technique.",
        "Conduite du changement : Rédaction de manuels et formation de plus de 100 collaborateurs aux nouveaux outils digitaux."
      ]
    }
  ],
  skills: [
    {
      category: "Gestion Produit",
      items: ["Backlog", "Roadmap", "KPI", "MVP", "Animation COPIL"]
    },
    {
      category: "Parcours Client (UX)",
      items: ["Analyse comportements", "Analytics", "Self-service digital"]
    },
    {
      category: "Qualité & Recette",
      items: ["Stratégie de test", "Go/No-Go", "Jira", "Mantis"]
    },
    {
      category: "Environnements Normés",
      items: ["RGPD", "Sécurité", "Secteur Public & Banque"]
    },
    {
      category: "Technique",
      items: ["PHP", "Symfony", "SQL", "Git", "API", "Architecture SI"]
    }
  ],
  softSkills: [
    "Transversalité (MOA / DSI)",
    "Gestion de situations complexes",
    "Agilité multi-secteurs",
    "Vision utilisateur / UX",
    "Communication fonctionnelle",
    "Leadership transversal",
    "Rigueur & Conformité"
  ],
  education: [
    {
      degree: "Développeur Web Back-End",
      school: "IFOCOP (Rungis)",
      year: "2022 - 2023"
    },
    {
      degree: "Technicien Systèmes & Réseaux",
      school: "GEFI (Créteil)",
      year: "2019 - 2020"
    },
    {
      degree: "DUT Tech. de commercialisation",
      school: "Université Paris-Est Créteil (UPEC)",
      year: "Diplôme obtenu"
    }
  ]
};
