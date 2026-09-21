# Atelier Terres Claires

Maquette d'un site vitrine **responsive** pour un atelier de céramique artisanale.
Ce projet est une intégration front-end (HTML, CSS, JavaScript) réalisée sans
framework ni dépendance, mettant l'accent sur le **responsive design** et
l'**accessibilité**.

## Aperçu

Le site présente une page d'accueil vitrine : en-tête, barre de navigation,
section héro, grille de produits et pied de page. Sur mobile, la navigation se
transforme en menu « burger ».

> Une fois GitHub Pages activé, la démo sera consultable ici :
> `https://vulpes38.github.io/atelier-terres-claires/`

## Fonctionnalités

- **Navigation responsive** : les liens horizontaux laissent place à un menu
  burger en dessous de 768 px.
- **Menu interactif en JavaScript** : ouverture / fermeture au clic, et
  fermeture automatique au clic sur un lien ou via la touche `Échap`.
- **Mise en page adaptative** : la grille de produits et le pied de page passent
  d'un affichage multi-colonnes à une seule colonne sur petit écran.
- **Accessibilité** : bouton natif navigable au clavier et attributs ARIA
  (`aria-label`, `aria-expanded`, `aria-controls`).

## Technologies

- **HTML5** — structure sémantique (`header`, `nav`, `main`, `footer`)
- **CSS3** — Flexbox, Grid et media queries pour le responsive
- **JavaScript** — manipulation du DOM, `classList`, gestion d'événements
  (aucune bibliothèque externe)

## Structure du projet

```
atelier-terres-claires/
├── index.html      # Structure et contenu de la page
├── style.css       # Mise en forme et adaptation responsive
├── script.js       # Logique du menu burger
└── README.md       # Ce fichier
```

## Consulter le projet

**En local**
1. Télécharger ou cloner le dépôt.
2. Ouvrir `index.html` dans un navigateur.
3. Réduire la fenêtre sous 768 px (ou activer le mode responsive des outils de
   développement) pour voir apparaître le menu burger.

**En ligne**
Via GitHub Pages, une fois l'hébergement activé (voir le lien dans la section
Aperçu).

## Principe technique du menu burger

Le JavaScript ne gère que l'**état** : au clic, il ajoute ou retire une classe
CSS `is-open`. C'est le CSS qui réagit à cette classe pour afficher le menu.
Cette séparation des responsabilités (structure / présentation / comportement)
maintient un code lisible et maintenable.

## Contexte

Maquette réalisée dans le cadre d'une formation en conception et réalisation web
et digital. L'objectif de cet exercice est de démontrer la maîtrise de
l'intégration front-end responsive et des bonnes pratiques d'accessibilité.

## Auteur

Réalisé par [vulpes38](https://github.com/vulpes38).
