# LMJ Enterprise — site Astro

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/
```

- Tout le contenu est dans `src/data/site.ts` (textes, services, galerie, contact).
- **Images** : les fichiers utilisés par le site sont stockés localement dans `public/assets/images/`. Aucun téléchargement n'est nécessaire pour lancer ou construire le site.
- Couleurs : variables CSS en haut de `src/styles/global.css` (`--brand`, `--navy`, `--accent`…).
- Développement local : `npm run dev` sert le site à `http://localhost:4321/`.
- Déploiement : push sur `main` → GitHub Pages via `.github/workflows/deploy.yml`
  (Settings → Pages → Source : GitHub Actions). Le workflow publie les versions adaptées à `https://natynela.github.io/cln-enterprise/` et au domaine personnalisé déclaré dans `public/CNAME`.
- Le formulaire utilise `mailto:` : brancher Formspree / Netlify Forms pour un envoi réel.
- Pages non migrées (non fournies) : why-choose-us, french-polishing, dry-lining, cleaning-services, industries, tools-and-tips, blog.
