# Plan de travail

- [x] Analyser la page actuelle et définir une expérience centrée sur des rébus visuels de célébrités.
- [x] Implémenter une galerie de cartes illustrées avec plusieurs niveaux de difficulté et une réponse masquée par défaut.
- [x] Générer la première image/illustration intégrée à l'interface et ajouter un moyen explicite de révéler la solution.
- [x] Vérifier le comportement avec lint et build.
- [x] Documenter le résultat dans une section review.

# Review

- La page d'accueil affiche maintenant une expérience "Images de jeux de mots" en français.
- Six énigmes visuelles de célébrités sont disponibles, avec rotation journalière et difficulté variable.
- La réponse reste masquée jusqu'à l'action explicite de l'utilisateur.
- Vérifications effectuées avec succès: `pnpm lint` puis `pnpm build`.
