# Portfolio - Pierre Rakotodimimanana

Portfolio personnel de Pierre Rakotodimimanana, Développeur Mobile Senior spécialisé en Flutter, React Native, Kotlin et Swift.

🌐 **Site live** : [melo567.github.io](https://melo567.github.io)

## Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- npm (inclus avec Node.js)

## Installation

1. **Cloner le repository**

```bash
git clone https://github.com/Melo567/melo567.github.io.git
cd melo567.github.io
```

2. **Installer les dépendances**

```bash
npm install
```

## Développement

### Lancer le mode watch (développement)

Cette commande surveille les modifications et recompile automatiquement le CSS :

```bash
npm run watch:css
```

Ensuite, ouvrez `index.html` dans votre navigateur. Vous pouvez utiliser une extension comme [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) pour le rechargement automatique.

### Compiler le CSS pour la production

```bash
npm run build
```

Cette commande génère un fichier CSS minifié dans `assets/css/tailwind.min.css`.

## Structure du projet

```
melo567.github.io/
├── assets/
│   ├── css/
│   │   └── tailwind.min.css    # CSS Tailwind compilé
│   └── img/
│       ├── favicon/            # Icônes du site
│       ├── pierre.png          # Photo de profil
│       ├── misaina.jpeg        # Photo témoignage
│       └── rabe_mamy.jpeg      # Photo témoignage
├── src/
│   └── input.css               # Fichier source Tailwind
├── index.html                  # Page principale
├── tailwind.config.js          # Configuration Tailwind
├── package.json                # Dépendances et scripts
└── README.md
```

## Technologies utilisées

- **HTML5** - Structure sémantique
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide Icons** - Icônes SVG
- **Google Fonts** - Polices Inter et Playfair Display
- **Web3Forms** - Gestion du formulaire de contact

## Fonctionnalités

- Design responsive (mobile-first)
- Menu mobile avec hamburger
- Animations au scroll (Intersection Observer)
- Formulaire de contact fonctionnel
- SEO optimisé (meta tags, Open Graph, JSON-LD)
- Performance optimisée (lazy loading, CSS minifié)

## Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans les variables CSS dans `index.html` :

```css
:root {
    --color-ghibli-dark-green: #3D5A46;
    --color-ghibli-medium-green: #6C8B77;
    --color-ghibli-light-blue: #A2D0C1;
    --color-ghibli-cream: #F5F1E4;
    --color-ghibli-accent-gold: #D2A860;
    --color-ghibli-dark-blue: #5C7B8F;
}
```

### Modifier le contenu

Éditez directement le fichier `index.html` pour :
- Mettre à jour les informations personnelles
- Ajouter/modifier les expériences professionnelles
- Changer les témoignages
- Modifier les services proposés

### Mettre à jour le formulaire de contact

Le formulaire utilise [Web3Forms](https://web3forms.com/). Pour utiliser votre propre clé :

1. Créez un compte sur Web3Forms
2. Obtenez votre clé d'accès
3. Remplacez la valeur dans `index.html` :

```html
<input type="hidden" name="access_key" value="VOTRE_CLE_ICI">
```

## Déploiement

Le site est automatiquement déployé via GitHub Pages à chaque push sur la branche `main`.

Pour déployer manuellement :

1. Compilez le CSS : `npm run build`
2. Commitez les changements
3. Poussez sur GitHub : `git push origin main`

## Licence

ISC

## Contact

- **Email** : pierrerakotodimimanana@gmail.com
- **LinkedIn** : [Pierre Rakotodimimanana](https://www.linkedin.com/in/pierre-rakotodimimanana/)
- **WhatsApp** : +261 34 15 229 53
