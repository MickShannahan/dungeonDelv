  let monster ={
    name:'Turtle Monster',
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

function update(){
  // update party
  let partyElm = document.getElementById('party')
  let partyHealthElm = document.getElementById('party-health')
  let partyHealthReactElm = document.getElementById('party-health-react')
  let attackButton = document.getElementById('attack-button')
  partyElm.innerText = `fighter: ${party.fighter.health}| wizard: ${party.wizard.health}| cleric: ${party.cleric.health} `
  let partyHealth = party.fighter.health + party.wizard.health + party.cleric.health
  let attackPower = (party.fighter.health > 0 ? party.fighter.damage : 0) + (party.wizard.health > 0 ? party.wizard.damage : 0) + (party.cleric.health > 0 ? party.cleric.damage : 0 )
  attackButton.innerText = `attack ${attackPower} dmg`
  if (partyHealth > 100){
    let overHeal = partyHealth - 100
    partyHealthElm.style.width = 100+ '%'
    partyHealthReactElm.style.width = 100 + '%'
    partyHealthElm.innerText = overHeal.toString()
  } else {
    partyHealthElm.style.width = partyHealth + '%'
    partyHealthReactElm.style.width = partyHealth + '%'
    partyHealthElm.innerText = ''
  }

  // upadate gold
  let goldElm = document.getElementById('gold')
  goldElm.innerText = gold.toString()

  // update monster
  let monsterElm = document.getElementById('monster')
  monsterElm.innerText = monster.name + ' lvl.' + monster.level
  let monsterHealthElm = document.getElementById('monster-health')
  let monsterHealthReactElm = document.getElementById('monster-health-react')
  monsterHealthElm.style.width = (monster.health/monster.maxHealth )*100 + '%'
  monsterHealthReactElm.style.width = (monster.health/monster.maxHealth )*100 + '%'
  checkIfMonsterDead()
}

function attack(){
  let attackPower  = 0
  for(let key in party){
    let hero = party[key]
    if(hero.health> 0){
      attackPower += hero.damage
    }
  }
  if(attackPower == 0){
    window.alert('your whole party is dead')
  }
  monster.health -= attackPower
  update()
}

function checkIfMonsterDead(){
  if(monster.health <= 0){
    gold += monster.gold
    monster.level++
    monster.maxHealth += monster.maxHealth/2
    monster.damage += Math.round(monster.damage/2)
    monster.gold += Math.round(monster.gold/2)
    monster.health = monster.maxHealth
    update()
  }
}

function healHero(hero){
  if(gold > 25){
    gold -= 25
    party[hero].health += 15
    update()
  }
}

function hurtHero(){
  for(let key in party){
    let hero = party[key]
    hero.health -=monster.damage
    if(hero.health <= 0){
      hero.health = 0
    }
  }
  update()
}

function startInterval(){
  let interval = setInterval(hurtHero, 5000)
}

startInterval()
update()