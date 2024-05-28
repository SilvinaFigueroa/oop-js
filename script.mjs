
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"]
//         }
//     },
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}


// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// const leo = robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// const frank = robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll()
// leo.roll()
// frank.roll()

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
        this.inventory.push("healing potion");
    }
    talk() {
        console.log("Saying something")
    }
}


const robin = new Adventurer("robin","wizard")
robin.inventory.push("sword", "potion", "artifact")
// console.log(robin)

const leo = new Companion("leo","cat")
robin.companion = leo
// console.log(leo)

const frank = new Companion("leo","cat")
frank.inventory.push("small hat", "sunglasses")
// console.log(frank)

leo.companion = frank
console.log(robin)

