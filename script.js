// Classe & constructeur combattant
class Fighter
{
    constructor(name, hp, strength, accuracy, bullets)
    {
        this.name = name; // Nom du joueur
        this.hp = hp; // Vie du joueur
        this.strength = strength; // Attaque du joueur
        this.accuracy = accuracy; // Precision du joueur
        this.bullets = 0; // Nombre de balles
        this.canDefense = false; // Le joueur se defend?
    }
}

// Initialiser les combattants
player1 = new Fighter("Garen", 100, 20, null, 0.7);
player2 = new Fighter("Mundo", 100, 20, null, 0.7);

// Appel fonction pour lancer le combat
Fight(player1, player2);

// Fonction pour demander le choix d'action
function PlayerChoice(player, target)
{
    console.log(player.name, `Que souhaitez-vous faire? : 
    1. Charger
    2. Attaquer
    3. Se défendre
    `);

    let choice = parseInt(prompt("Entrez votre choix")); 
    player.canDefense = false; // Reinitialiser la defense

    if (choice === 1)
    {
        Load(player);
    }
    else if (choice === 2)
    {
        Attack(player,target);
    }
    else if (choice === 3)
    {
        canDef(player);
    }
    else
    {
        console.log("Choix invalide")
    }

}

// Fonction pour charger
function Load(player)
{
    player.bullets++;
    console.log(player.name + "charge une balle il a maintenant" + player.bullets + "balles.")
}

// Fonction pour attaquer
function Attack(player, target)
{
    if (player.bullets > 0)
    {
        player.bullets--;
        console.log(player.name + "tente d'attaquer" + target.name + "!");

    }
}

// Fonction pour se defendre
function canDef(player)
{
    player.canDef = true;
    console.log(player.name + "se défend ! Il prend aucun dégâts.")
}

// Fonction pour simuler le combat
function Fight(player1, player2)
{

}