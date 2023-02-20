# Exercices

## Controlled Component

Reprendre le code de `Select` et ajouter 2 props : `selectedValue` et `onSelected` qui vont faire de `Select` un composant controllé (la valeur devant venir du state de `App`) 

Afficher `selectedValue` à la place de `'Titi'` et appeler `onSelected` lorsqu'on clique sur un item du menu.

## Render Props

Ajouter une props optionnelle `renderItem` qui mettra en forme l'item dans la boucle avec le pattern Render Props. Si on ne passe pas `renderItem` on garde le rendu actuel.

Comme rendu par exemple mettre en italique `<i>` depuis `App`