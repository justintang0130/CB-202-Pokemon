let pokemon = {
    name: "Lucario",
    type: "Fighting",
    hp: 200,
    level: 35
}

let enemy_pokemon = {
    name: "Greninja",
    type: "Water",
    hp: 200,
    level: 35
}

// array representing my pokemon's attacks
let attacks = ["Scratch", "Growl", "Dragon Dance", "Ember"]

/*
function to generate random number from 0-3
*/
function random_num_generator() {
    const random_num = Math.floor(Math.random() * 4)
    return random_num
}

/*
returns attack name and damage dealt
*/
function attack_details(attacks) {
    const attack_name = attacks[random_num_generator()]
    const attack_damage = Math.floor(Math.random() * 101 + 1)
    const details = {
        name: attack_name,
        damage: attack_damage
    }
    return details
}

console.log(attack_details(attacks))
