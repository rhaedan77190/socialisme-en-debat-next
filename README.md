# Socialisme en débat

Ce dépôt contient le code source du blog **Socialisme en débat**, un site de publication
socialiste francophone construit avec Next.js 14, TypeScript, Tailwind CSS, Contentlayer et
Framer Motion. Le design privilégie la sobriété et l’accessibilité tout en offrant une
lecture confortable et une expérience moderne (dark/light mode, barre de progression,
sommaire sticky, etc.).

## Installation locale

> **Remarque :** Ce projet est conçu pour être déployé sur Vercel où l’installation des
> dépendances sera effectuée automatiquement. Si vous souhaitez lancer le site en local,
> assurez‑vous d’avoir **Node.js ≥ 18** installé puis exécutez :

```sh
pnpm install   # ou npm install – en fonction de votre gestionnaire de paquets
pnpm run dev   # démarre le serveur de développement sur http://localhost:3000
```

## Structure des dossiers

* `app/` – architecture App Router de Next.js, contenant les pages (`page.tsx`) et les
  routes API (sitemap.xml, rss.xml, robots.txt).
* `components/` – composants réutilisables (Header, Footer, cartes, barre de progression,
  callouts, etc.).
* `content/` – fichiers source MDX alimentés par Contentlayer : `posts/` pour les articles
  et `authors/` pour les auteurs.
* `public/` – actifs statiques (logos SVG, images de couverture, favicon).
* `tailwind.config.ts` – configuration de Tailwind et design tokens ;
* `contentlayer.config.ts` – définition des types `Post` et `Author`.

## Ajouter un article

Les articles sont écrits en **MDX** et stockés dans `content/posts/`. Chaque fichier MDX doit
commencer par un front‑matter YAML décrivant ses métadonnées :

```mdx
---
title: "Titre de l’article"
slug: "slug-url-friendly"
date: "2025-01-01"
description: "Résumé court de l’article."
tags:
  - Catégorie
  - Tag secondaire
category: "Nom de la catégorie"
cover: "/images/mon-image.png"
author: "Arthur"
readingTime: "5 min"
status: "published"
---

Contenu en markdown…

import Callout from '@/components/Callout'

<Callout type="thesis">
Contenu du bloc thèse.
</Callout>

```

* `title` : titre affiché sur la page et dans les listes.
* `slug` : identifiant utilisé dans l’URL (sans espace ni accent).
* `date` : date de publication au format `YYYY-MM-DD`.
* `description` : court résumé utilisé dans les cartes et les méta‑données.
* `tags` et `category` : pour le classement et la recherche.
* `cover` : chemin vers l’image de couverture (placer vos propres images dans
  `public/images/`).
* `author` : clé correspondant à un fichier dans `content/authors/`.
* `readingTime` : estimation du temps de lecture.
* `status` : `published` ou `draft`.

Les notes de bas de page peuvent être ajoutées avec la syntaxe standard Markdown
`[^1]` et sont gérées par Contentlayer et remark-footnotes.

## Design tokens

Les variables CSS définissant la palette de couleurs et la typographie se trouvent dans
`app/globals.css` :

- `--color-primary` : rouge profond désaturé utilisé pour les éléments d’accent (liens,
  boutons).
- `--color-accent` : sable orangé pour les éléments secondaires.
- `--color-muted` : beige clair pour les fonds doux.
- `--color-background` / `--color-foreground` : fond et texte principaux (s’adaptent en
  dark mode).

Les polices utilisées sont **Inter** pour le texte courant et **Space Grotesk** pour les
titres via les fonts optimisées de Next.js.

## Déploiement

1. **Créez un dépôt GitHub** et poussez l’ensemble des fichiers de ce répertoire.
2. Connectez‑vous à Vercel et importez le dépôt. Vercel détecte automatiquement Next.js
   et construit le site. Aucune configuration supplémentaire n’est nécessaire.
3. Configurez votre domaine personnalisé ou utilisez l’URL fournie par Vercel.

Les hooks CI (lint, type‑check, build) peuvent être ajoutés via GitHub Actions si vous
souhaitez automatiser la vérification du code. Par défaut, aucun workflow n’est fourni.

## Licence

Ce projet est publié sous licence MIT. Les images générées et les logos SVG inclus dans
`public/` sont libres d’utilisation dans ce contexte.