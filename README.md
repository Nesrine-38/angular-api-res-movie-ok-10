# AngularApi

Projet angular lié au projet symfony-rest pour voir la partie requêtes HTTP depuis Angular

Exercice
Installation et configuration de symfony
Si ce n'est pas déjà fait

Cloner, configurer et lancer le projet symfony-rest
Faire un composer req cors pour rajouter les CORS (ce qui fera que angular pour faire des requêtes vers le symfony)
Lancer le projet avec symfony server:start et le garder ouvert dans un coin

Nouveau projet Angular

Créer un projet angular avec le ng new en choisissant de mettre le router (par défaut c'est non, donc faites attention) et d'être en css
Créer un fichier src/app/entities.ts et dedans faire une interface Movie qui va reprendre la structure de la classe Movie (pour le moment, on ne met pas les genres, on le fera peut être plus tard)
Dans le AppModule, rajouter le HttpClientModule ainsi que le FormsModule
Créer un HomeComponent et faire une route racine qui pointe dessus

Affichage des films

Générer un component MovieItemComponent qui aura un @Input required de type Movie (pas oublier de rajouter le strictPropertyInitialization dans le tsconfig)
Dans le template faire un affichage des informations du film, juste son title et sa released pour le moment par exemple
Dans le HomeComponent, créer une propriété de type Movie[] initialisée en tableau vide et dans le template faire une boucle dessus pour afficher des app-movie-item
(Si on veut tester tel quel, sans appel serveur, on peut rajouter un ou deux films en dur dans le tableau)

Le service

Générer un service avec le cli (ng g s à priori) qui s'appelera MovieService
Dans le constructeur de ce service, rajouter un http:HttpClient en private (comme dans l'exemple fait dans l'autre projet)
Créer une méthode fetchAll() et dedans faire une requête de type get vers l'url du symfony, sur la route /api/movie, en typant le get en Movie[] (à la place du any que j'avais mis dans l'exemple)
On fait un return de ce get, sans le subscribe
Côté HomeComponent, on rajoute un constructeur avec une private MovieService dedans
On ajoute une méthode getData qui va utiliser la méthode fetchAll du movie service et faire un subscribe dessus et qui va directement assigner la valeur du subscribe à la propriété movies du HomeComponent
On rajoute un bouton qui au click lancera le getData

Le formulaire de movie

Créer un nouveau component FormMovieComponent et dans son template créer un form avec label et input pour title,released,resume,duration
Créer une propriété movie:Movie dans ce component et lier ses propriétés aux inputs du form
Rajouter une méthode handleSubmit() qui va pour le moment faire juste un console log du movie pour voir si tout est bien connecté
Dans le MovieService rajouter une méthode add(movie:Movie) qui va faire un http.post vers api/movie en lui donnant le movie en deuxième argument du post
Dans le FormMovieComponent, on récupère le service dans le constructeur et on fait en sorte d'appeler le post dans le handleSubmit
Rajouter un @Output added qui sera un EventEmitter avec un Movie dedans, puis faire en sorte de déclencher le emit dans le subscribe du post en lui donnant les data comme argument
Côté HomeComponent, créer une méthode toList(movie:Movie) qui va faire un push dans this.list et assigner cette méthode au (added) du app-form-movie en lui donnant $event en argument


Suppression des movies 

Dans le MovieService, rajouter une méthode delete qui va attendre un id number en argument et qui va s'en servir pour déclencher un http.delete en concaténant l'id à l'url
Dans le movie-item.component.html, rajouter un bouton de suppression et faire que lorsque l'on click dessus va emit un @Output avec le movie dedans
Côté HomeComponent on crée une méthode removeMovie(movie:Movie) qui va faire appel au delete du MovieService et dans le subscribe va faire en sorte de retirer le movie en question de la list (voir comment on utilise le filter)
Dans le template du home, on assigne cette méthode sur le app-movie-item
Page pour un seul movie
Générer un component SingleMovieComponent et créer une route paramétrée sur 'movie/:id' qui va pointer sur ce component
Dans le MovieService, créer une méthode fetchOne qui va attendre un id:any en argument et s'en servir pour faire un get vers http://localhost:8000/movie/id et qui va donc return un Movie
Dans le SingleMovieComponent, créer une propriété movie:Movie en vous inspirant de l'exemple de routing paramétré, récupérer la valeur du paramètre id et s'en servir pour faire un appel au fetchOne (le constructeur aura donc 2 arguments private), on aura donc un subscribe dans un subscribe...
Faire le template pour afficher les informations du films
Dans le template du MovieItem, rajouter un a avec un routerLink à la place du href qui pointera sur la route /movie/id


Mise à jour

Dans le FormMovieComponent, rajouter un @Input sur le movie:Movie
Dans le template de SingleMovieComponent, appeler le app-form-movie dans la div if (pas celle qui a le loading) en lui donnant à manger le movie (ça devrait préremplir les champs)
Toujours dans SingleMovieComponent, créer une méthode updateMovie(movie:Movie) qui va faire un console log de son argument et faire en sorte de l'appeler au (added) du FormMovie
Dans le service, créer une méthode update(movie:Movie) avec un http.patch dedans qui va à la fois concaténé l'id (comme le fetchOne ou le delete) mais aussi donner son movie en deuxième argument du patch (comme le post)
Appeler cette méthode dans le updateMovie du SingleMovieComponent et dans son subscribe on remplace this.movie par data
