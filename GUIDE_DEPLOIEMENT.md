# 🚀 Guide de déploiement — Site AIDS sur Vercel

## Étape 1 : Préparer les fichiers

Vous avez reçu un dossier `aids-website` contenant :
```
aids-website/
├── index.html          ← Page principale
├── css/
│   └── style.css       ← Tous les styles
├── js/
│   └── scripts.js      ← Interactivité
├── images/
│   └── president.jpg   ← Votre photo
└── vercel.json         ← Configuration Vercel
```

**À faire avant de déployer :**
- Ajouter les photos des autres membres dans `images/` (ex: `treasurer.jpg`, `secretary.jpg`)
- Mettre à jour les liens réseaux sociaux dans `index.html` (chercher `href="#"` dans la section `.social-links`)
- Remplacer `contact@aids-asso.org` par votre vraie adresse email
- Configurer HelloAsso : mettre votre vrai lien HelloAsso dans le bouton "Faire un don"

---

## Étape 2 : Créer un compte GitHub (gratuit)

1. Aller sur https://github.com
2. Cliquer "Sign up" et créer un compte gratuit

---

## Étape 3 : Mettre le site sur GitHub

1. Sur GitHub, cliquer le **"+"** en haut à droite → "New repository"
2. Nommer le repo : `aids-website`
3. Laisser **Public** coché → cliquer "Create repository"
4. Suivre les instructions pour "upload an existing folder" (ou glisser-déposer les fichiers)

---

## Étape 4 : Déployer sur Vercel

1. Aller sur https://vercel.com
2. Cliquer "Sign Up" → choisir "Continue with GitHub"
3. Une fois connecté, cliquer **"Add New Project"**
4. Trouver votre repo `aids-website` → cliquer **"Import"**
5. Laisser tous les paramètres par défaut → cliquer **"Deploy"**
6. ✅ En 30 secondes, votre site est en ligne !

Votre URL sera : `aids-website.vercel.app`

---

## Étape 5 : Personnaliser l'URL (optionnel)

Sur Vercel, dans Settings → Domains, vous pouvez :
- Changer l'URL en `aids-asso.vercel.app` (gratuit)
- Connecter un vrai domaine comme `aids-asso.org` (~12€/an sur OVH ou Gandi)

---

## 📧 Activer le formulaire de contact (recommandé)

Pour que le formulaire envoie vraiment des emails, utiliser **Formspree** (gratuit) :

1. Aller sur https://formspree.io → créer un compte gratuit
2. Créer un nouveau formulaire → copier votre Form ID (ex: `xrgjaopb`)
3. Dans `index.html`, modifier la balise `<form>` :
   ```html
   <form id="contact-form" action="https://formspree.io/f/VOTRE_ID" method="POST">
   ```
4. Supprimer le `e.preventDefault()` dans `scripts.js` (ou laisser Formspree gérer)

---

## 🖼️ Ajouter les photos des membres

1. Nommer les photos : `treasurer.jpg`, `secretary.jpg`, etc.
2. Les copier dans le dossier `images/`
3. Dans `index.html`, remplacer les `<div class="team-avatar-placeholder">` par :
   ```html
   <img src="images/treasurer.jpg" alt="DZIWONOU Kisito F." />
   ```

---

## 🔗 Mettre à jour les réseaux sociaux

Dans `index.html`, chercher la section `.social-links` et remplacer `href="#"` par vos vrais liens :
```html
<a href="https://facebook.com/votre-page" ...>
<a href="https://instagram.com/votre-compte" ...>
<a href="https://linkedin.com/company/votre-organisation" ...>
```

---

## 💙 HelloAsso — Configurer les dons

1. Aller sur https://www.helloasso.com
2. Créer votre espace association (gratuit)
3. Créer un formulaire de don
4. Copier votre lien HelloAsso
5. Dans `index.html`, remplacer le lien dans `.btn-don`

---

Besoin d'aide ? Contactez-nous sur Discord ou par email.
