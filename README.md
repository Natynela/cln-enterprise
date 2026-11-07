# LMJ Enterprise — site Astro

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/
```

- Tout le contenu est dans `src/data/site.ts` (textes, services, galerie, contact).
- **Images et fichiers** : lance `npm run assets` (Node 18+) pour télécharger toutes les images vers `public/assets/images/` et la vidéo + PDF vers `public/assets/files/`. Commit ensuite ces dossiers dans GitHub.
- Couleurs : variables CSS en haut de `src/styles/global.css` (`--brand`, `--navy`, `--accent`…).
- Déploiement : push sur `main` → GitHub Pages via `.github/workflows/deploy.yml`
  (Settings → Pages → Source : GitHub Actions). `public/CNAME` = domaine personnalisé.
- Le formulaire utilise `mailto:` : brancher Formspree / Netlify Forms pour un envoi réel.
- Pages non migrées (non fournies) : why-choose-us, french-polishing, dry-lining, cleaning-services, industries, tools-and-tips, blog.
