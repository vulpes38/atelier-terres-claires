# atelier-terres-claires

Fonctionnalités
Navigation responsive : les liens horizontaux laissent place à un menu burger en dessous de 768 px.
Menu interactif en JavaScript : ouverture / fermeture au clic, et fermeture automatique au clic sur un lien ou via la touche Échap.
Mise en page adaptative : la grille de produits et le pied de page passent d'un affichage multi-colonnes à une seule colonne sur petit écran.
Accessibilité : bouton natif navigable au clavier et attributs ARIA (aria-label, aria-expanded, aria-controls).
Technologies
HTML5 — structure sémantique (header, nav, main, footer)
CSS3 — Flexbox, Grid et media queries pour le responsive
JavaScript — manipulation du DOM, classList, gestion d'événements (aucune bibliothèque externe)
Structure du projet
atelier-terres-claires/
├── index.html      # Structure et contenu de la page
├── style.css       # Mise en forme et adaptation responsive
├── script.js       # Logique du menu burger
└── README.md       # Ce fichier
Consulter le projet

En local

Télécharger ou cloner le dépôt.
Ouvrir index.html dans un navigateur.
Réduire la fenêtre sous 768 px (ou activer le mode responsive des outils de développement) pour voir apparaître le menu burger.

En ligne Via GitHub Pages, une fois l'hébergement activé (voir le lien dans la section Aperçu).

Principe technique du menu burger

Le JavaScript ne gère que l'état : au clic, il ajoute ou retire une classe CSS is-open. C'est le CSS qui réagit à cette classe pour afficher le menu. Cette séparation des responsabilités (structure / présentation / comportement) maintient un code lisible et maintenable.

Contexte

Maquette réalisée dans le cadre d'une formation en conception et réalisation web et digital. L'objectif de cet exercice est de démontrer la maîtrise de l'intégration front-end responsive et des bonnes pratiques d'accessibilité.
