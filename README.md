# M1Mobile

Test sur Android

Config
    src/config/

    config.sample.js contient les variables d'environnement à renseigner dans un fichier config.js
        Une clé api et une url APi


Screens
- Home : page d'accueil
- Exercises : page d'exercices avec une barre de recherche
- Favorites : page des favoris des exercices

Components
- AppNavigator : composant de navigation
- SearchBar : composant de barre de recherche pour les exercices (muscles)
- Card : composant d'exercice
- Quote : composant de citations
- ThemeProvider : composant de thème (Ronnie, Arnold, Cbum)
- ThemeHandler : composant de gestion du thème

APIs
    src/api/

- https://api.api-ninjas.com/v1/quotes?category=inspirational
    pour les quotes 

- https://api.api-ninjas.com/v1/exercises?muscle=${query}
    pour les exercices selon le muscle renseigné (biceps, triceps, etc...)