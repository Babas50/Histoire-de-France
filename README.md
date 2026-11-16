# Histoire de France, le grand jeu

Jeu de quiz sur l'histoire de France : QCM, carte à pointer, frise chronologique, vrai ou faux.
150 questions, 6 époques, 3 niveaux. Fonctionne sur téléphone, tablette et ordinateur, installable, utilisable hors ligne.

## Publier sur GitHub Pages

1. Sur github.com, crée un dépôt (bouton « New »), par exemple `histoire-france`. Laisse-le public.
2. Clique sur « uploading an existing file », glisse tous les fichiers de ce dossier (sans le dossier lui-même), puis « Commit changes ».
3. Va dans Settings, puis Pages. Dans « Branch », choisis `main` et le dossier `/ (root)`, puis Save.
4. Après une à deux minutes, le jeu est en ligne à l'adresse `https://TON-PSEUDO.github.io/histoire-france/`.

## Installer sur un téléphone

- Android (Chrome) : un bouton « Installer l'appli » apparaît dans le jeu, ou menu du navigateur puis « Installer l'application ».
- iPhone et iPad (Safari uniquement) : bouton Partager, puis « Sur l'écran d'accueil ».

## Modifier ou ajouter des questions

Toutes les questions sont dans `questions.js`, avec un mode d'emploi en haut du fichier. Copie une ligne du même type et change le texte.

IMPORTANT : après toute modification, ouvre `sw.js` et change le numéro de version (`histoire-france-v1` devient `histoire-france-v2`, etc.). Sinon les joueurs qui ont déjà ouvert le jeu gardent l'ancienne version en mémoire.

## Contenu des fichiers

- `index.html` : le jeu (écrans, règles, carte SVG de la France)
- `questions.js` : les 150 questions
- `manifest.json` et `sw.js` : installation et mode hors ligne
- `icon-180.png`, `icon-192.png`, `icon-512.png` : icônes de l'application

## Limites connues

- La carte est schématique : le contour est dessiné à la main, pas issu d'un fond de carte officiel. Les zones de réponse acceptées vont de 50 à 90 km selon le niveau.
- Les faits ont été écrits avec soin et plusieurs ont été recoupés en ligne, mais une relecture reste conseillée avant un usage scolaire.
- Le meilleur score et les badges sont enregistrés dans le navigateur de chaque joueur, sans classement partagé.
