// Classe & constructeur combattant.
class Fighter
{
    constructor(name, hp, strength, accuracy)
    {
        this.name = name; // Nom du joueur
        this.hp = hp; // Vie du joueur
        this.strength = strength; // Attaque du joueur
        this.accuracy = accuracy; // Precision du joueur
        this.bullets = 0; // Nombre de balles
    }
}

// Initialiser les combattants
player1 = new Fighter("Jhin", 100, 20, 0.7);
player2 = new Fighter("Graves", 100, 20, 0.7);

// Appel fonction pour lancer le combat
Fight(player1, player2);

// Fonction pour demander le choix d'action
function PlayerChoice(player, target)
{
    console.log(player.name +`, que souhaitez-vous faire?\n : 
    1. Charger une balle
    2. Attaquer
    \n`);

    let choice = parseInt(prompt("Entrez votre choix :\n\n")); 

    if (choice === 1)
    {
        Load(player);
    }
    else if (choice === 2)
    {
        Attack(player,target);
    }
    else
    {
        console.log("Choix invalide, cela fait passer votre tour ! ");
    }

}

// Fonction pour charger
function Load(player)
{
    player.bullets++;
    console.log(player.name , "charge une balle il a maintenant" , player.bullets , "balle(s).");
}

// Fonction pour attaquer
function Attack(player, target)
{
    if (player.bullets > 0)
    {
        player.bullets--;
        console.log(player.name , "tente d'attaquer" , target.name + "!");
        if (Math.random() < player.accuracy)
        {
            target.hp -= player.strength;
            console.log(player.name , "reussi son attaque et inflige" , player.strength , "de degats a" , target.name)
        }
        else {
            console.log(player.name , "rate son attaque !")
        }

    }
    else
    {
        console.log(player.name , "n'a pas de balle pour attaquer, ça le fait passer son tour !");
    }
}

// Fonction pour simuler le combat
function Fight(player1, player2)
{
    console.log("Bienvenue sur la faille de l'invocateur ! Preparez-vous au combat !");

    // Tant que les 2 joueurs ont encore de la vie
    while (player1.hp > 0 && player2.hp > 0)
    {
        // Tour du joueur 1
        PlayerChoice(player1, player2);
        if (player1.hp <= 0) break;

        // Tour du joueur 2
        PlayerChoice(player2, player1);
        if (player2.hp <= 0) break;

        console.log("\nEtat des joueurs :\n" +
        " - Nom:" + player2.name , "HP:" + player2.hp , "Balle(s):" + player2.bullets + "\n" +
        " - Nom:" + player1.name , "HP:" + player1.hp , "Balle(s):" + player1.bullets + "\n"

        );
    }

    // Resultat du duel
    if (player1.hp > 0) {
        console.log(player1.name , "a gagne le duel !");
    }
    else
    {
        console.log(player2.name , "a gagne le duel !")
    }

}
