  let monster ={
    name:'Goblin',
    level: 1,
    damage: 1,
    maxHealth:25,
    health: 25,
    gold: 10
  }

let gold = 0

let party = {
  fighter: {
    health:50,
    damage: 1,
  },
  wizard:{
    health:15,
    damage:5,
  },
  cleric:{
    health:35,
    damage:3,
  }
}

// NOTE don't forget to call this function anytime the data changes
function update(){
  // update party
  // TODO UPDATE Grab the party elements off the DOM and update them (you will want to at least display each party members health)
 
  // upadate gold
  // TODO UPDATE Grab the gold element of the DOM and update it
 
  // update monster
  // TODO UPDATE Grab the monster element of the DOM and update it (monster name, level, remaining health)
}

function attack(){
  // TODO iterate with a FOR IN LOOP over the party DICTIONARY and calculate the party's total attack power, then subtract that attack power from the monsters health (you might want to take into account if a party member is "unconscious" with and if statement)

  // TODO check if the monster is dead after the damage has been dealt
}

function checkIfMonsterDead(){
// TODO Check the monsters health and see if they are dead (health < 0)

// TODO if dead, reward the party! make sure they get the gold the monster had at the time it died, they will need it.

// TODO if dead, level the monster up! increase the monsters maxHealth, gold value and damage value 

// TODO reset the monster so the party can fight it again (set it's health back to it's maxHealth).
}

function healHero(className){
  // TODO check if the user has enough gold to heal their party member (come up with how much that should cost)

  // TODO if heal was purchased, target the party member from the party DICTIONARY and heal them (increase their health)
}

function hurtParty(){
// TODOiterate with a FOR IN LOOP over the party DICTIONARY and hurt each member by the monsters damage value
}

function startInterval(){
  // TODO create an interval that will run the "hurtParty" function every 5 seconds
}

// TODO don't forget to run the functions you want to run when the page loads