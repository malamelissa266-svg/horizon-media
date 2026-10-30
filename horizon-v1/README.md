# HORIZON V1 — média d'actualité

Starter Next.js + Supabase : accueil responsive, navigation thématique, pages articles publiés, connexion rédacteur et création de brouillons.

## Mise en route
1. Installer Node.js 20+.
2. `npm install`
3. Copier `.env.example` en `.env.local` et renseigner l'URL Supabase et la clé anon.
4. Dans Supabase SQL Editor, exécuter `supabase/schema.sql`.
5. Créer manuellement un compte rédacteur dans Supabase Authentication.
6. `npm run dev` puis ouvrir http://localhost:3000. Connexion : `/login`, rédaction : `/admin`.

## Mise en ligne
Importer le projet dans un dépôt Git privé, connecter le dépôt à Vercel, ajouter les variables d'environnement, déployer puis associer un domaine acheté après vérification de disponibilité.

## À faire avant production
- Configurer des rôles stricts admin/rédacteur et renforcer les politiques RLS (les politiques de démonstration sont à durcir).
- Ajouter édition/publication/programmation, historique, validation à deux niveaux et journal d'audit.
- Ajouter pages légales, politique de correction, consentement cookies, sauvegardes, anti-spam et monitoring.
- Remplacer les contenus et images de démonstration par des contenus sourcés et autorisés.
- Ajouter un fournisseur de flux d'actualité autorisé et un pipeline de vérification. Aucune publication IA sans validation éditoriale au départ.
- Configurer sitemap, métadonnées SEO, Open Graph et données structurées.

Ce pack n'est pas encore hébergé et ne dispose pas de nom de domaine ni de base de données connectée. Aucun mot de passe ou secret ne doit être communiqué dans le chat.
