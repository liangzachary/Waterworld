//const readlinesync.question = require('readlinesync.question');
const readlinesync = require('readline-sync')

const fs = require('fs');
function read(){
  let rawdata = fs.readFileSync('player.json');
  let player = JSON.parse (rawdata);
  return player
}

function write(playerdata){
  let data = JSON.stringify(playerdata);
  fs.writeFileSync('player.json', data);
}

// Extremely low chance that this is ever the min number, do we fix sometime?
function randomNumber(min, max) {
    return (Math.ceil(Math.random() * (max - min) + min)); 
}
// Function call 
randomNumber(1, 5)
var players = read()

var player = null
var gatekeeping = {
  "Gatekeeper" : {
    "name" : "Gatekeeper",
    "attack" : 12,
    "hp" : 1800,
    "maxhp": 1800,
    "mingold" : 400,
    "maxgold" : 600,
  },
  "Polluter" : {
    "name" : "Polluter",
    "attack" : 11,
    "hp" : 1200,
    "maxhp": 1200,
    "mingold" : 100,
    "maxgold" : 250,
  }
}
var enemies = {
  "Plastic-Spoon" : {
    "name" : "Plastic-Spoon",
    "attack" : 11,
    "hp" : 1600,
    "maxhp": 1600,
    "rng" : 1,
    "mingold" : 123,
    "maxgold" : 321 
  },
  "Fish" : {
    "name" : "Fish",
    "attack" : 10,
    "hp" : 2000,
    "maxhp": 1100,
    "rng" : 2,
    "mingold" : 354,
    "maxgold" : 534
  },
  "Plastic-Fork" : {
    "name" : "Plastic-Fork",
    "attack" : 13,
    "hp" : 1300,
    "maxhp": 1300,
    "rng" : 3,
    "mingold" : 213,
    "maxgold" : 452
  },
  "Plastic-Spork" : {
    "name" : "Plastic-Spork",
    "attack" : 12,
    "hp" : 1500,
    "maxhp": 1500,
    "rng" : 4,
    "mingold" : 102,
    "maxgold" : 452
  },
  "Plastic-Knife" : {
    "name" : "Plastic-Knife",
    "attack" : 14,
    "hp" : 1100,
    "maxhp": 1100,
    "rng" : 5,
    "mingold" : 213,
    "maxgold" : 342
  },
  "Plastic-Bag" : {
    "name" : "Plastic-Bag",
    "attack" : 15,
    "hp" : 900,
    "maxhp": 900,
    "rng" : 6,
    "mingold" : 212,
    "maxgold" : 323
  },
  "Oil" : {
    "name" : "Oil",
    "attack" : 7,
    "hp" : 2000,
    "maxhp": 2000,
    "rng" : 7,
    "mingold" : 0,
    "maxgold" : 500
  },
  "Smoke" : {
    "name" : "Smoke",
    "attack" : 14,
    "hp" : 3000,
    "maxhp": 3000,
    "attackturns": 4,
    "rng" : 8,
    "mingold" : 210,
    "maxgold" : 430
  },
  "Plastic-Bottle" : {
    "name" : "Plastic-Bottle",
    "attack" : 13,
    "hp" : 1600,
    "maxhp": 1600,
    "rng" : 9,
    "mingold" : 220,
    "maxgold" : 350,
  },
  "Cigarette" : {
    "name" : "Cigarette",
    "attack" : 16,
    "hp": 700,
    "maxhp": 700,
    "rng" : 10,
    "mingold" : 250,
    "maxgold" : 370
  },
  "Sewage" : {
    "name" : "Sewage",
    "attack" : 12,
    "hp" : 2000,
    "maxhp": 2000,
    "rng" : 11,
    "mingold" : 280,
    "maxgold" : 400,
  }
}
// console.log(players);
// players["0"]["hp"] = 5
// console.log(players)
// write(players)

// player = {
//   name: "Jerry",
//   attack: 3,
//   maxhp: 10,
//   hp: 10, 
//   money: 0,
//   weapon: ""
// }

var baseplayer = {
    "name":"",
    "attack":15,
    "maxhp":1500,
    "hp":1500,
    "money":1000,
    "weapon":"",
    "state":0,
    "items":[]
}
//var itemsdetails2 = {

//}
var itemsdetails = {
  "axe" : {
    "type": "weapon",
    "mindamage": 2,
    "maxdamage": 7,
    "healing":0,
  },
  "knife" : {
    "type":"weapon",
    "mindamage": 3,
    "maxdamage": 6,
    "healing": 0,
  },
  "wand":{
    "type":"weapon",
    "mindamage": 5,
    "maxdamage": 5,
    "healing": 0,
  },
  "health potion" : {
    "type":"item",
    "mindamage": 0,
    "maxdamage": 0,
    "healing": 5,
  },
  "mace" : {
    "type":"weapon",
    "mindamage": 3,
    "maxdamage":6,
    "healing" : 0,
  },
  "katana" : {
    "type": "weapon",
    "mindamage": 8,
    "maxdamage": 11,
    "healing":0,
  },
  "frying-pan" : {
    "type": "weapon",
    "mindamage": 6,
    "maxdamage": 9,
    "healing":0,
  },
  "hammer" : {
    "type": "weapon",
    "mindamage": 5,
    "maxdamage": 10,
    "healing":0,
  },
  "wrench" : {
    "type": "weapon",
    "mindamage": 8,
    "maxdamage": 8,
    "healing":0,
  },
  "scythe" : {
    "type": "weapon",
    "mindamage": 7,
    "maxdamage": 10,
    "healing":0,
  }
}

// Add all of the items you want to start in the shop
// Add another value for the player for their money
var shop = {
  "health potion": 10,
  "wand": 100,
  "axe": 50,    
  "knife":50,
}
var shop2 = {
  "scythe": 200,
  "wrench" : 150,
  "katana" : 250,
  "hammer" : 150,
  "frying-pan" : 150,
}


var bad_guy = {
  name: "yrreJ",
  attack: 10,
  maxhp: 5,
  hp: 100,
  weapon:{
  "name": "Weapon",
  "type":"weapon",
  "mindamage": 1,
  "maxdamage": 3,
  "healing": 0,

  }
}
var wanker1 = {
  name: "wanker1",
  attack: 15,
  maxhp: 1000,
  hp: 1000,
}
var wanker2 = {
  name: "wanker1",
  attack: 15,
  maxhp: 1000,
  hp: 1000,
}
var thekid = {
  name: "thekid",
  attack: 14,
  maxhp: 1500,
  hp: 1500,
}

// Add the sleep function here

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms/100); // changed for demo
  });
}

async function choosecharacter() {
  // DONE 1. print the name of all saved characters
  // 2. ask the user which character is the one they want to play
  // 3. let them make a new character if they want
  // 4. otherwise start the game at the chosen character


  // Ask the player if they want to start a new game, or continue a previous game

  var playername = readlinesync.question("Would you like to " +
  "A. Start a new game " + 
  "B. Continue from a save")
  while (playername !== "A" && playername !== "B"){
    var playername = readlinesync.question("Type A or B.")
  }

  if (playername === "A"){
    var name = readlinesync.question("Hello valient traveler, what is thy name?")
    baseplayer["name"] = name
    players[name] = baseplayer
    write(players)
    player = players[name]
  }
  if (playername === "B"){
    var playerids = Object.keys(players)
    var playercount = playerids.length
    for (var i = 0; i < playercount; i++) {
      console.log(playerids[i])
    }
  
    var areyou = readlinesync.question("Are you any of these adventurers? If not say no.")
    while(!(areyou in players) && areyou !== "no") {
      var areyou = readlinesync.question("Are you sure you are none of them? Type their name to load their progress or type no if you do not see yourself.")
    }
    if (areyou === "no"){
      var name = readlinesync.question("Hello valient traveler, what is thy name?")
      baseplayer["name"] = name
      players[name] = baseplayer
      write(players)
      player = players[name]
      console.log("hi")
    }
    if (areyou in players){
      player = players[areyou]
    }
  }
  // console.log("Are you " + player["name"] + "?")
  
  // console.log("Or, are you some other being?").
  // var
  // while (playername !== players["name"])
}

async function intro() {
  // Adventure RPG
  // The player goes out to fight bad guys
  // The player beats up the bad guy
  // Returns to the town to heal up his healt
  // player["name"] = readlinesync.question("Hello valient traveler, what is thy name?")
  // write(players)
  await sleep(500)
  console.log("Welcome to WaterWorld " + player["name"])
  await sleep(2000)
  console.log("Our world was conquered by an evil wizard with magical water powers a long time ago and we have summoned you from the realm Earth to save us from extinction.")
  await sleep(10000)
  console.log("Every time a wave crashes onto our shores, the ocean rises higher until eventually, there is only ocean.")
  await sleep(10000)
  console.log("Find the mighty sword COOL SWORD and defeat the evil wizard BAD GUY to save everyone from impending doom.")
  await sleep(5000)
  console.log("The entire world, or what's left of it, is counting on YOU. Save us all " + player["name"])
 // await sleep(3000)
  console.log("You try to get up.")
//  await sleep(1000)
  console.log("NO! You must rest for you are weak sire.")
//  await sleep(1000)
  console.log("You pass out.")
  // 1. Write an introduction for the game 
  // 2. Print the status of the characterf
//  await sleep(500)
  console.log(".")
//  await sleep(500)
  console.log(".")
//  await sleep(500)
  console.log(".")
//  await sleep(500)
  console.log(".")
//  await sleep(500)
  console.log("hello " + player["name"])
//  await sleep(1000)
  console.log("your attack is " + player["attack"])
//  await sleep(1000)
  console.log("your max health is " + player["maxhp"])
//  await sleep(1000)
  console.log("your current health is " + player["hp"])
//  await sleep(1000)
  if (player["maxhp"] === player["hp"]){
    console.log("nice and healthy")
  }else{
    console.log("just walk it off")
  }
//  await sleep(500)
  console.log(".")
//  await sleep(500)

  console.log(".")
//  await sleep(500)

  console.log(".")
//  await sleep(500)
  console.log(".")
//  await sleep(500)

  player["state"] = player["state"] + 1
  write(players)
}

// intro()
// intro()

// function hello() {
//   console.log("Hello!")
//   console.log("My name is Kevin.")
// }


async function fight1() {
//  await sleep(1000)
  console.log("You awake in an alleyway.")
//  await sleep(3000)
  console.log("Two men look down on you while you lie.")
//  await sleep(3000)
  console.log("You realize they are biting their thumbs.")
//  await sleep(2000)
  console.log("Do you bite your thumb at me, sir?")
//  await sleep(2000)
  console.log("I do bite my thumb, sir.")
//  await sleep(2000)
  console.log("Do you bite your thumb at me, sir?")
//  await sleep(2000)
  console.log("[The man to the other man]Is the law of our side, if I say ay?")
//  await sleep(3000)
  console.log("No.")
//  await sleep(1000)
  console.log("No, sir, I do not bite my thumb at you, sir, but I bite my thumb, sir.")
//  await sleep(3000)

  console.log("How about we fight over it?")
//  await sleep(2000)
  // 3. Fight a bandit
  //   can fight or run away
  //   loop through the fight until the bandit or player is dead

  console.log("You grab a broken beer bottle.")
//  await sleep(1000)
  console.log("Have at thee!")
//  await sleep(1000)
  console.log(".")
//  await sleep(500)

  console.log(".")
//  await sleep(500)
  console.log(".")
//  await sleep(500)
  console.log(".")
//  await sleep(500)
  var attacking = readlinesync.question("Hello traveler! Type stab to stab and punch to punch.")
//  await sleep(2000)
  var stab = 2
  var punch = 1

  // 1. Keep asking the user until they type in stab or punch

  // attacking = "punch" -> True

  // || means only one needs to be true
  // true || true -> true
  // true || false -> true
  // false || true -> true
  // false || false -> false

  // && means both have to be true
  // true && true -> true
  // true && false -> false
  // false && true -> false
  // false && false -> false

  while (attacking !== "stab" && attacking !== "punch"){
    var attacking = readlinesync.question("Buddy I don't have all day. stab to stab and punch to punch.")
  }

  // 2. Calculate damage based on stab or punch chosen
  if (attacking === "stab"){
    var damage = player["attack"] * stab * player["attack"]
    console.log("You stab the wankers for " + damage + " damage. En garde!")
  }
  if (attacking === "punch"){
    var damage = player["attack"] * punch * player["attack"]
    console.log("You strike the wankers for " + damage + " damage. HI-YAH!")
  }

  wanker1["hp"] = wanker1["maxhp"] - damage
  console.log("The wankers have " + wanker1["hp"] + " health")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log("Thou strikes like my grandmother!")
  console.log("The wankers flail their bodies at you dealing" + wanker1["attack"] + "damage.")
  player["hp"] = player["hp"] - wanker1["attack"]
  console.log("Your current hp: " + player["hp"])
  console.log(".")
  console.log(".")
  console.log(".")
  console.log(".")
  var attacking = readlinesync.question("Quickly before they recover! stab or punch?")
  while (attacking !== "stab" && attacking !== "punch"){
    var attacking = readlinesync.question("Buddy I don't have all day. stab to stab and punch to punch.")
  }

  // 2. Calculate damage based on stab or punch chosen
   if (attacking === "stab"){
    var damage = player["attack"] * stab * player["attack"]
    console.log("You stab the wankers for " + damage + " damage. En garde!")
  }
  if (attacking === "punch"){
    var damage = player["attack"] * punch * player["attack"]
    console.log("You strike the wankers for " + damage + " damage. HI-YAH!")
  }
  if (wanker1["hp"] - damage > 0){
    wanker1["hp"] = wanker1["hp"] - damage
    console.log("The wankers have " + wanker1["hp"] + " health")
  }else{
    console.log("You have defeated the wankers! Good riddance.")
    player["money"] = player["money"] + 500
  }
  

  console.log(".")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log("hello " + player["name"])
  console.log("your attack is " + player["attack"])
  console.log("your max health is " + player["maxhp"])
  console.log("your current health is " + player["hp"])
  if (player["maxhp"] === player["hp"]){
    console.log("nice and healthy")
  }else{
    console.log("just walk it off")
  }
  console.log(".")
  console.log(".")
  console.log(".")
  console.log(".")
  player["state"] = player["state"] + 1
  write(players)
}
async function scene2() {
  console.log("The wankers fall to the ground teary eyed and bloody nothed.")
  console.log("A map falls out of one of the wanker's pockets.")
  console.log("The map tells of a hidden city deep underground.")
  console.log("The city of Florida.")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log("Suddenly, the sun grows brighter and you are surrounded by a blinding light.")
  console.log("A booming voice echoes in your head:")
//  console.log("𝖋𝖔𝖑𝖑𝖔𝖜 𝖙𝖍𝖊 𝖒𝖆𝖕 𝖙𝖔 𝖙𝖍𝖊 𝖜𝖔𝖗𝖘𝖙 𝖕𝖑𝖆𝖈𝖊 𝖔𝖓 𝖊𝖆𝖗𝖙𝖍.")
  console.log("-------------------------------------------")
//  console.log("𝕿𝖍𝖊𝖗𝖊 𝖞𝖔𝖚 𝖜𝖎𝖑𝖑 𝖋𝖎𝖓𝖉 𝖙𝖍𝖊 𝖘𝖜𝖔𝖗𝖉 𝖎𝖓 𝖙𝖍𝖊 𝖍𝖆𝖓𝖉𝖘 𝖔𝖋 🄼🅁.🅆🄾🅁🄻🄳🅆🄸🄳🄴")
  console.log("----------------------------------------------------------")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log(".")
  player["state"] = player["state"] + 1
  write(players)
}
// Currently in a town
// Talk to anyone in the town?
// Character lost some health, can he talk to someone in the town heal up?
async function scene3() {
  console.log("You walk out of the alleyway into a quiet town.")
  console.log("The town has a tavern, shop, and a child getting beaten in the street.")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log("Would you like to:")
  console.log("A: Be subhuman and get a drink while a little kid is being pummeled.")
  console.log("B: Be pathetic and buy items while a kid screams in pain.")
  console.log("C: HELP THE KID!")

  var help = readlinesync.question("A, B, or C?")

  while (help !== "C"){
    var help = readlinesync.question("҉W҉R҉O҉N҉G҉ ҉A҉N҉S҉W҉E҉R҉. Try Again!")
  }

  if (help === "C"){
  console.log("Good choice!") 
  }
  console.log(".")
  console.log(".")
  console.log(".") 
  console.log(".")
  console.log("You charge, howling, towards the scoundrels.")
  console.log("They turn 180° as you bash them.")
  console.log("The scoundrels scatter scurrying on all fours away.")
  console.log(".")
  console.log(".")

  console.log(".")
  console.log(".")
  console.log("hello " + player["name"])
  console.log("your attack is " + player["attack"])
  console.log("your max health is " + player["maxhp"])
  console.log("your current health is " + player["hp"])
  if (player["maxhp"] === player["hp"]){
    console.log("nice and healthy")
  }else{
    console.log("just walk it off")
  }
  console.log(".")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log("The kid picks himself up from the ground.")
  console.log("I owe thou my life Mr... What is your name?")
  console.log("Wow! You are the legendary " + player["name"] + "? Then I shall accompany you on your journey!") 
  var kid = readlinesync.question("Should he accompany you? Type yes or no.")
  while (kid !== "yes" && kid !== "no"){
    var kid = readlinesync.question("Type yes or no.")
  }
  if (kid === "yes"){
    console.log("Thank you hero! Let us defeat the evil wizard together!")
  }
  if (kid === "no"){
    console.log("Thank you hero! Let us defeat the evil wizard together!")
  }
  console.log(".")
  console.log(".")
  console.log(".")
  console.log(".")
  console.log("The child hands you a coin which you pocket.")
  console.log("Go to the shop over there. The shop owner is a big fan of heroes and will give you a powerful weapon.")
  player["state"] = player["state"] + 1
  write(players)
}
async function scene4() {
  console.log("You walk into the store and a dwarf waddles towards you squinting.")
  console.log("He stands still and his eyes bulge out of his face and then he faints.")
  console.log("After a few minutes he recovers and reaches out his hand.")
  console.log("Hello I am the hunble owner of this shop.")
  console.log("You must be the great hero right?")
  console.log("Here take my strongest weapon!")
  console.log("You have obtained the epic sword")
  // What does he give?
  // Why does he give it to you?
  console.log("You look at the epic sword noticing that it is rusted, chipped, and dull.")
  console.log("As you touch its blade it begins to restore itself until a shining silver blade lies in your hands.")
  console.log("The shopkeeper claps and cheers tears streaming down his face.")
  console.log("You have passed my trial you are a true hero. You may have anything from my shop at a reduction.")
  console.log("On the shelves you see ")
  // player["state"] = player["state"] + 1
  // write(players)

}
async function entershop() {
  // 1. Display the items in the shop and the costs
  var items = Object.keys(shop)
  console.log(items)
  console.log("Look here hero. Today we have these items available.")
  var itemscount = items.length
  console.log(itemscount)
  for (var i = 0; i < itemscount; i++) {
    console.log(i + " - a/an "+ items[i] +" which costs " + shop[items[i]])
  }
  
  var itembuy = readlinesync.question("Enter 0, 1, 2, or 3 to purchase the item respective to that number or enter 4 to leave the shop.")
  while (itembuy !== "0" && itembuy !== "1" && itembuy !== "2" && itembuy !== "3" && itembuy !== "4"){
    var itembuy = readlinesync.question("Please type one of the 0, 1, 2, 3, or 4.")
  }
  if (itembuy === "0"){
    if (player["money"] >= shop[items[Number(itembuy)]]){
      player["items"].push(items[Number(itembuy)])
      player["money"] = player["money"] - shop[items[Number(itembuy)]]
      console.log("Thank you for purchasing a/an " + items[Number(itembuy)])
    }
    else{ 
      console.log("You're broke please leave.")
    } 
    if (player["money"] === 0){
      console.log("Leave my establishment ye broke scoundrel")
    }
  }
  if (itembuy === "1"){
    if (player["money"] >= shop[items[Number(itembuy)]]){
      player["items"].push(items[Number(itembuy)])
      player["money"] = player["money"] - shop[items[Number(itembuy)]]
      console.log("Thank you for purchasing a/an " + items[Number(itembuy)])
    }
    else{ 
      console.log("You're broke please leave.")
    }
    if (player["money"] === 0){
      console.log("Leave my establishment ye broke scoundrel")
    }
  }
  if (itembuy === "2"){ 
    if (player["money"] >= shop[items[Number(itembuy)]]){
      player["items"].push(items[Number(itembuy)])
      player["money"] = player["money"] - shop[items[Number(itembuy)]]
      console.log("Thank you for purchasing a/an " + items[Number(itembuy)])
    }
    else{ 
      console.log("You're broke please leave.")
    }
    if (player["money"] === 0){
      console.log("Leave my establishment ye broke scoundrel")
    }
  }
  if (itembuy === "3"){
    if (player["money"] >= shop[items[Number(itembuy)]]){
      player["items"].push(items[Number(itembuy)])
      player["money"] = player["money"] - shop[items[Number(itembuy)]]
      console.log("Thank you for purchasing a/an " + items[Number(itembuy)])
    }
    else{ 
      console.log("You're broke please leave.")
    }
    if (player["money"] === 0){
      console.log("Leave my establishment ye broke scoundrel")
    }
  }
  if (itembuy === "4"){
    console.log("You leave the shop.")
  }
  console.log("You currently own: " + player["items"])

  // 3. Check that the player has enough money to buy the item
  // if statement to check player money vs. the cost

  // 4. Allow the player to leave the store when they are done
  // an option in the readlinesync.question the leave
  player["state"] = player["state"] + 1
  write(players)
}

async function scene5() {
  console.log("You begin to walk away from the shop and out away from the town.")
  console.log("The kid taps your shoulder.")
  console.log("They ask about the piece of paper protruding from your pouch.")
  console.log("Your eyes widen as you remember the lost city of Florida.")
  console.log("You find the town on the map and you begin to walk towards the trail portrayed on the map.")
  console.log("A trail of gold becomes visible in front of you as the trail on the map begins to glow.")
  var encounter = randomNumber(0,5)
  if (encounter == 2||encounter == 3||encounter == 4|| encounter == 5){
    console.log("Suddenly, a nearby bush begins to growl and shake.")
    console.log("A shadowy figure emerges from it and lunges towards you!")
    await combt2()
  }
  /*
  5-10 random things that happen along the trail
  events:
    fight something
    enter some area with some comments (nothing happens, or random effect to the player) - a peaceful meadow, swampy area
    find a traveler that sells you a potion
    other small events??

    randomNumber(0,21)
    merchant rarest 5% 
    meadow rare 15%
    encountering people 50%
      stealing, getting free stuff, fighting, healing, talking
    random enemy 7-9 30%


  */
  var path = 0
  while (path < 8){
    var encounter = randomNumber(0,21)
    // Merchant
    if (encounter == 1){
     
    }
   // Meadow

    if (encounter == 2 || encounter == 3 || encounter == 4){
      var rng2 = randomNumber(0,3)
      // Forest
      if (rng2 == 1){
        console.log("You're awakened by a deer licking your hand.")
        console.log("You sit up frightening the deer which jumps and begins to prance away.")
        console.log("You tell the kid to follow you and together you walk after the deer")
        console.log("The deer leads you into a magical forest.")
        console.log("As you walk through the forest, you feel your wounds close and you suddenly feel energized.")
        player["hp"] = player["maxhp"]
        console.log("You return to the path feeling rejuvinated")
      }
      // Waterfall
      if (rng2 == 2){
        console.log("You smell a horrible stench and realize it's source is you.")
        console.log("The kid catches a whiff of your odor and instructs you to leave immediately.")
        console.log("Near a forest, you hear the sound of running water.")
        console.log("At the source of the noise you find a waterfall.")
        console.log("While bathing within it, you feel rejuvinated and your cuts and bruises heal themselves.")
        player["hp"] = player["maxhp"]
        console.log("You return to the path now energetic and healed.")
      }
      // Lake
      if (rng3 == 3){
        console.log("A bird soars past you flying dangerous close to your head.")
        console.log("You watch the bird fly to an area above the forest where it congregates with hundreds of other birds.")
        console.log("You and the kid walk through the trees to a giant lake where creatures of all kinds and sizes drink from the water.")
        console.log("You drink water from the lake with your hands in a cup.")
        console.log("The sweet taste of the water fills you with energy and you feel your wounds closing and scabs healing.")
        player["hp"] = max["hp"]
        console.log("You walk back to the path feeling healthy.")
      }
    }
    //People
    if (encounter >= 5 && encounter <= 15){
      var rng3 = randomNumber(0,6)
      if (rng3 == 1){
        console.log("A beggar approaches you.")
        console.log("He begs for some money so you generously give him 100 coins.")
        player["money"] = player["money"] - 100
      }
      if (rng3 == 2){
        console.log("You meeet a nice old lady.")
        console.log("She hears your stomach grumble and hands you a pastry.")
        console.log("You eat the pastry, feel your wounds heal, and you feel energized.")
        player["hp"] = player["maxhp"]
      }
      if (rng3 == 3){
        console.log("A beggar approaches you.")
        console.log("He begs for some money so you generously give him 100 coins.")
        console.log("The beggar turns out to be a millionare in disguise and repays you tenfold.")
        player["money"] = player["money"] - 1000

      }
      if (rng3 == 4){
        console.log("You meet a clown from a travelling circus.")
        console.log("The clown offers to show you his act to which you happily accept.")
        console.log("You both go into a tent when suddenly, the lights turn off and a music box begins to sing.")
        console.log("You look down to see the clowns clothes with no clown and turn to see him lunging towards you.")
        await combt2()
      }
      if (rng3 == 5){
        console.log("A beggar approaches you.")
        console.log("He begs for some money so you generously give him 100 coins.")
        console.log("The beggar acts like he is satisfied and begins to walk away.")
        console.log("You feel around a breeze blow by your body and when feeling your waist you realize your coin sack has dissapeared.")
        console.log("You lose 100 coins.")
        player["money"] = player["money"] - 1000
      }
      if (rng3 == 6){
        console.log("A travelling merchant approaches you carrying his mobile shop with him.")
        console.log("Might you be the great hero who is rumored to be our savior?")
        console.log("I don't wamt to come off as greedy but I haven't sold a single thing for over a decade due to the tragic lack of heroes.")
        console.log("Let me show you what I have to sell.")
        var items = Object.keys(shop2)
        console.log(items)
        console.log("Here's what I have on me.")
        var itemscount = items.length
        console.log(itemscount)
        for (var i = 0; i < itemscount; i++) {
        console.log(i + " - a/an "+ items[i] +" which costs " + shop2[items[i]])
        }
    
        var itembuy2 = readlinesync.question("Enter 0, 1, 2, 3, or 4 to purchase the item respective to that number or enter 5 to leave the shop.")
        while (itembuy2 !== "0" && itembuy2 !== "1" && itembuy2 !== "2" && itembuy2 !== "3" && itembuy2 !== "4" && itembuy2 !== "5"){
          var itembuy2 = readlinesync.question("Please type one of the 0, 1, 2, 3, or 4.")
        }
        if (itembuy2 === "0" || itembuy2 === "1" || itembuy2 === "2" || itembuy2 === "3" || itembuy2 === "4"){
          console.log(shop2[items[Number(itembuy2)]])
          console.log(Number(player["money"]))
          if (player["money"] >= shop2[items[Number(itembuy2)]]){
            player["items"].push(items[Number(itembuy2)])
            player["money"] = player["money"] - shop2[items[Number(itembuy2)]]
            console.log("Bless you hero. Enjoy your new " + items[Number(itembuy2)])
            write(players)
          }
        }




      }
    }
    //Enemy
    if (encounter >= 16 && encounter <= 21){
      var rng = randomNumber(0,7)
      if (rng == 1){
        console.log("You look up.")
        console.log("Rain clouds loom above you as rain begins to fall.")
        console.log("You see a huge droplet of rain barreling straight downwards towards you and the kid.")
        console.log("The droplet reveals its true form as it screeches and crashes into you.")
        await combt2()
      }
      if (rng == 2){
        console.log("Suddenly, a giant crack forms beneath you.")
        console.log("You hear the earth trembling as the crack grows all the way to the horizon.")
        console.log("All of a sudden the rumbling stops giving you the illusion of safety.")
        console.log("The crack in the earth widens and you fall into the darkness followed by the kid.")
        console.log("When you awake you are greeted by a shadowy figure which lunges towards you.")
        await combt2()
      }
      if (rng == 3){
        console.log("You look around the path.")
        console.log("All of the couples sit side by side.")
        console.log("The birds sing and fly off together and the rabbits cuddle with eachother.")
        console.log("A great pain pierces your heart as you remember your long lost love.")
        console.log("Behind the trees you notice a figure enveloped in darkness.")
        console.log("Upon further inspection you notice the figure greatly resembles your lost love.")
        console.log("You call to them in tears as you remember the times you spent with them.")
        console.log("The thing turns around, revealing its true face.")
        console.log("As you scream in terror it lunges towards you.")
        await combt2()
      }
      if (rng == 4){
        console.log("At the side of the road sounds of great violence awaken you from your rest.")
        console.log("You look to see a bunch of townsfolk kicking an old lady clearly unconcious as she lies face down in the mud.")
        console.log("The kid screams and runs towards them with his weapon drawn, scaring them away.")
        console.log("You go to help the old lady get back up but as you touch her arm it deflates like a balloon along with the rest of her body.")
        console.log("You see a mass hudled in the place where her heart used to be.")
        console.log("The kid pokes it with a stick.")
        console.log("The thing begins to twitch.")
        console.log("The kid screams and falls as he sees the old lady's deformed face looking at him and covered in mud.")
        console.log("As the thing turns towards you it's mask, the old lady's face, falls apart and a shadowy figure hiding behind it lunges towards you.")
        await combt2()
      }
      if (rng == 5){
        console.log("The kid taps your shoulder and points at a nearby tree saying they need to use the bathroom.")
        console.log("You sit on the path and wait for the kid to finish.")
        console.log("The kid returns with his hood on and you begin walking again.")
        console.log("A while later you hear someone screaming 'HEY!' behind you.")
        console.log("You turn to see the kid running towards you, exhausted.")
        console.log("Right as he begins asks you who the hooded figure is, it turns around revealing it's hideous face and lunges towards you.")
        await combt2()
      }
      if (rng == 6){
        console.log("You awake to hear a bell ringing loudly beside you.")
        console.log("Turning around, you see that the source of the sound is a traveling merchant's bell attached to his giant mobile shop.")
        console.log("The masked merchant calls you by your name and offers you an item from his shop.")
        console.log("A doll made to resemble you stands out and you pick it up.")
        console.log("You turn it over observing it with your back towards the merchant.")
        console.log("Suddenly, a giant shadow begins to grow behind you covering you in darkness.")
        console.log("You turn to see the masked shopkeeper now trippled in size with huge claws.")
        console.log("It's mask falls off and the horrifying creature lunges towards you.")
        await combt2()
      }
      if (rng == 7){
        console.log("Out of animalistic instinct you suddenly reach your arm out, catching a ball that was flying towards your face.")
        console.log("You catch it and look around for it's owner.")
        console.log("You turn suddenly as you hear someone behind you.")
        console.log("The realization that it's just a little child relieves you and you hand them back their ball.")
        console.log("You wave them goodbye and begin to walk away when you get hit in the back of your head by something.")
        console.log("Stunned, you swivel to see the child now a horrific abomination grinning at you.")
        console.log("Shocked, you trip over yourself which the child sees and takes advantage of and lunges towards you.")
        await combt2()
      }
      
      
    }
    var path = path + 1
  }

  console.log("You begin to feel drowsy after a while and your eyelids grow heavy.")
  console.log("You fall asleep until you are awakened by the kid shaking you.")
  console.log("The kid points at the map and tells you to look it. You notice that the dot has moved next to a place titled")
  console.log("𝖋𝖑𝖔𝖗𝖎𝖉𝖆")
  
player["state"] = player["state"] + 1
write(players)
}


async function scene6(){
  console.log("You and the kid walk towards the point marked 𝖋𝖑𝖔𝖗𝖎𝖉𝖆")
  console.log("Upon reaching it you look around but see nothing anywhere nearby except for a frog with a top hat sitting on a rock.")
  console.log("You ask the frog for the directions to 𝖋𝖑𝖔𝖗𝖎𝖉𝖆.")
  console.log("The frog responds with a nervous croak.")
  console.log("The kid brandishes their sword menacingly.")
  console.log("The frog breaks and reveals that 𝖋𝖑𝖔𝖗𝖎𝖉𝖆 is underneath the rock that he is sitting on.")
  console.log("The frog jumps off the rock and upon flipping it, you see a hole leading down into darkness.")
  console.log("You enter the darkness with the kid and suddenly there is only silence.")
  console.log("Suddenly, you hear footsteps behind you approaching closer.")
  console.log("You turn reflexively and block an incoming mace with your weapon.")
  console.log("A screeching sound rings from left of you and you are suddenly attacked by a monster in a suit of armor.")
  await combt3(gatekeeping.Polluter)
  console.log("You lie down, exhausted.")
  console.log("You feel around the walls until you find a lever.")
  console.log("You flip it.")
  console.log("Suddenly, the group beneath you gives and you plummet in total darkness.")
  console.log("You land on the cold hard floor which knocks you unconcious.")
  console.log("Footsteps awaken you from unconciousness.")
  console.log("You try to fight your eyelids to no avail as you drift back to sleep.")
  console.log("Once again you are shocked into conciousness and see that there is now a light shining dimly enough for you to see and two figures standing above you.")
  console.log("Suddenly the two figures begin to tremble and move closer to one another.")
  console.log("The two figures begin to merge into a single monstrous entity.")
  console.log("This monster leaps towards you animalisticly.")
  await combt3(gatekeeping.Polluter)
  console.log("The light illuminating the room grows until the entire room is illuminated by a bright white light.")
  console.log("An enormous gate stands glowing in front of you.")
  console.log("As you approach it, an arrow suddenly whistles past you.")
  console.log("You dodge the arrow and find it's source to be a figure adorned in white robes, wearing a mask, and weilding a bow and row.")
  console.log("The figure suddenly leaps off the ground and soars towards you.")
  console.log("You put your arms up defensively as the figure crashes into you.")



  var key = 2
  var enemys = gatekeeping.Gatekeeper
  var fighttt = "1"
  while (fighttt === "1"){
    fighttt = "0"
    var playercopy = createEnemy(player)
    var enemyhealth = enemys["maxhp"]
    
    console.log("You are forced to defend yourself from the gatekeeper of Florida")
  
    console.log("The fight begins.")
    
  
    console.log("You lunge into battle.")
    
    for (var i = 0; i < player["items"].length; i++) {
      console.log(i + " - " + player["items"][i])
    }
    var askitem = readlinesync.question("Would you like to use any of these items?")
    console.log(askitem)
    // choose 0, 1, or 2 - index
    var itemkey = player["items"][Number(askitem)]
    console.log(itemkey)
    var chosenitem = itemsdetails[itemkey]
    console.log(chosenitem)
    while (player["hp"] > 0 && enemyhealth > 0){
      
      var fightt = readlinesync.question("Type 1 for you and the kid strike with your current weapons or type 2 to run away or type 3 to use an item")
      while (fightt !=="1" && fightt !=="2" && fightt !== "3"){
        var fightt = readlinesync.question("1 for you and the kid to strike with your current weapon or type 2 to run away")
      }
    
    
      if (fightt === "1"){
        var damage = randomNumber(Number(chosenitem.mindamage), Number(chosenitem.maxdamage))*Number(baseplayer.attack)
        *randomNumber(2,4)
        var thekiddamage = randomNumber(Number(itemsdetails["mace"].mindamage), Number(itemsdetails["mace"].maxdamage) * Number(thekid.attack) * randomNumber(2,3))
        console.log(damage)
        console.log(thekiddamage)

        enemyhealth = enemyhealth - damage
        enemyhealth = enemyhealth - thekiddamage
        console.log("You did " + damage + " to the " + "gatekeeper" + "!")
        console.log("The kid did " + damage + " to the " + "gatekeeper" + "!")
        enemydamage = Math.ceil(12  * 0.8 * 10 * randomNumber(0,3))
        console.log(enemydamage)
        if (enemyhealth > 0){
          player["hp"] = player["hp"] - enemydamage
    
          console.log("You have " + player["hp"] + " health " + "and the " + "gatekeeper" + " enemy has " + enemyhealth + " health")


        
        }
        if (enemyhealth < 1){
          console.log("YOU WON! The " + "gatekeeper" + " has been defeated!")
          var plusmoney = randomNumber(100, 300)
          player["money"] = player["money"] + 
          console.log("You found " + plusmoney + " in the dead " + "gatekeeper" +"'s body!")
          console.log("You also find the key to the gate of Florida!")
          var key = 1
        }
        if (player["hp"]< 1){
          console.log("You lost. The " + "gatekeeper" + " mocks you for your weakness.")
          var death = readlinesync.question("Would you like to try again, 1, or would you like to continue onward, 2.")
          if (death === "1"){
            player = createEnemy(playercopy)

            
            
            var fighttt = "1"
          }
          if (death === "2"){
            player =  createEnemy(playercopy)




          }
        }
      }
      if (fightt === "2"){
        console.log("You run away.")
    
      }
      if (fightt === "3"){
        for (var i = 0; i < player["items"].length; i++) {
        console.log(i + " - " + player["items"][i])
        }
        var askitem = readlinesync.question("Would you like to use any of these items?")
        console.log(askitem)
        var itemkey = player["items"][Number(askitem)]
        console.log(itemkey)
        var chosenitem = itemsdetails[itemkey]
        console.log(chosenitem)
        if(chosenitem.healing <= 0){
          console.log("Please choose a different item.")
          var askitem = readlinesync.question("Would you like to use any of these items?")
          console.log(askitem)
          
        }
        else{
          console.log("You used the " + askitem + ".")
          player["hp"] = player["hp"] + askitem.healing
        }
      }

      

      
    }
        

  }
  if (key = 1){
    console.log("The gate to Florida open up and a blindingly bright light shines into your eyes.")
  }
  console.log("")

    
player["state"] = player["state"] + 1
write(players)
}

async function scene7(){
  console.log("The light once again engulfes you, but, you are blinded only for a moment as screeches awaken you to the hundreds of monsters lunging towards you.")
  console.log("You are thrown into combat against the army of Florida.")
  console.log("The fight beg-")
  console.log("HALT.")
  console.log("FPOOOOOOOM")
  console.log("Suddenly all the monsters fly off of you and stand in two orderly lines with a path down the middle.")
  console.log("At the end of the path sits a bald man wearing sun glasses underground.")
  console.log("'So you are the one who has been roughing up my subjects.' He says through gritted teeth.")
  console.log("'Not one for words hermano?' He inquires angrily.")
  console.log("Then, one of the monsters breaks formation and runs towards you ferociously screaming 'You dare disrespect the great Pitbull?!'")
  console.log("Pitbull waves his hand and the monster is flung back into its spot in the line.")
  console.log("'Listen closely amigo, I do not like the evil wizard no more than the next man. If you really are the hero, Ima gunna to need you to prove it. You have no idea how many fonies Ive had to deal with.' He said, looking bored.")
  console.log("'Are you up for the challenge?' He asked.")
  var hmmn = readlinesync.question("Are you ready to take on Pitbull? Type yes to begin or no to wimp out.")
  while (hmmn !== "yes" && hmmn !== "no"){
    var hmmn = readlinesync.question("Type yes to begin or no to wimp out.")
  } 
  if (hmmn === "yes"){
    console.log("And so it begins.")
    console.log("The light fades to black and you find yourself unable to see anything.")
    console.log("Suddenly you hear something fall from the cieling.")
    console.log("A light suddenly beems from a corner in the room and is followed by lights suddenly shining from every other corner until the object that dropped from the cieling is fully illuminated.")
    console.log("Suddenly, funk music begins to play and all the monsters start dancing to the rythm.")
    console.log("You look towards the are where his throne was and see nothing but a flat stage.")
    console.log("You then look around you and realize that you are inside of a stadium that's underground.")
    console.log("Suddenly the lights all strobe towards the platform which is now slowly being covered in fog and the monsters all begin cheering.")
    console.log("The music suddenly stops as Pitbull rises up from below the foggy stadium.")
    console.log("The monsters grow silent once Pitbull is fully visible.")
    console.log("'Monsters and hero persons, we have a very special show for you tonight!' announced Pitbull, still wearing sunglasses underground in his tuxedo.")
    console.log("'Tonight we have another supposed hero who wishes to prove himself.' As he said this, all the lights suddenly single you out in the crowd.")
    console.log("You are pushed by the monsters onto the stage.")
    console.log("'Lets spin the wheel of misfortune to see what your trial will be!' The monsters bring out a wheel after Pitbull signals them.")
    var rigged = readlinesync.question("Pick a number between 1 and 6 to choose your punishment.")
    console.log("'Thats tough buddy. It seems that you spun death by dying.' Said Pitbull with an empathetic look on his face.")
    console.log("Suddenly, Pitbull broke out laughing which the audience confusedly and awkwardly mirrored.")
    console.log("'Alright enough kidding around lets begin the challenge.' Pitbull then pulls out a deck of note cards and clears his throat.")
  }



  if (hmmn === "no"){
    console.log("BOOOOOOOOOOOOOOOO! Nice try but the show waits for noone.")
    console.log("And so it begins.")
    console.log("The light fades to black and you find yourself unable to see anything.")
    console.log("Suddenly you hear something fall from the cieling.")
    console.log("A light suddenly beems from a corner in the room and is followed by lights suddenly shining from every other corner until the object that dropped from the cieling is fully illuminated.")
    console.log("Suddenly, funk music begins to play and all the monsters start dancing to the rythm.")
    console.log("You look towards the are where his throne was and see nothing but a flat stage.")
    console.log("You then look around you and realize that you are inside of a stadium that's underground.")
    console.log("Suddenly the lights all strobe towards the platform which is now slowly being covered in fog and the monsters all begin cheering.")
    console.log("The music suddenly stops as Pitbull rises up from below the foggy stadium.")
    console.log("The monsters grow silent once Pitbull is fully visible.")
    console.log("'Monsters and hero persons, we have a very special show for you tonight!' announced Pitbull, still wearing sunglasses underground in his tuxedo.")
    console.log("'Tonight we have another supposed hero who wishes to prove himself.' As he said this, all the lights suddenly single you out in the crowd.")
    console.log("You are pushed by the monsters onto the stage.")
    console.log("'Lets spin the wheel of misfortune to see what your trial will be!' The monsters bring out a wheel after Pitbull signals them.")
    var rigged = readlinesync.question("Pick a number between 1 and 6 to choose your punishment.")
    console.log("'Thats tough buddy. It seems that you spun death by dying.' Said Pitbull with an empathetic look on his face.")
    console.log("Suddenly, Pitbull broke out laughing which the audience confusedly and awkwardly mirrored.")
    console.log("'Alright enough kidding around lets begin the challenge.' Pitbull then pulls out a deck of note cards and clears his throat.")
  }

}





async function quiz(){
  console.log("'Ahem. What is the first letter of The Alphabet?'")
  console.log("1. A, 2. T, 3. B, 4. All of the above, 5. This is a fictional world why do there be english.")
  var right = 1
  while (what !== "1" && what !== "2" && what !== "3" && what !== "4" && what !== "5"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
  }
  if (what === "1"){
    console.log("Congratulations! You got it right!")
    var right = 1
  }
  if (what === "2"){
    console.log("Ok smart guy I'll let you win this one time.")
    var right = right + 1
  }
  if (what === "3"){
    console.log("Close... One more chance.")
    var right = right + 1
  }
  if (what === "4"){
    console.log("It seems the public school system has failed you... Strike one of two.")
    var right = right + 1
  }
  if (what === "5"){
    console.log("Why would there be Florida and Pitbull? That's one wrong leaving you with one more chance.")
    var right = right + 1
  }
  if (right <= 3){
    console.log("Next question: What was my first hit single?")
    var what = readlinesync.question("1.Cosita Linda, 2.I Know You Want Me, 3.Give It To Me, 4.Voodoo, 5.Give Me Everything")
    while (what !== "1" && what !== "2" && what !== "3" && what !== "4" && what !== "5"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
    }
    if (what === "1"){
      console.log("Did you guess this because the name is Spanish?")
      var right = right + 1        
    }
    if (what === "2"){
      console.log("Lucky guess.")

    }
    if (what === "3"){
      console.log("I don't even know what this song is.")
      var right = right + 1
    }
    if (what === "4"){
      console.log("Have you even heard of this?")
      var right = right + 1      
    }
    if (what === "5"){
      console.log("Good guess but still wrong.")
      var right = right + 1      
    }
  }
  else{

  }

  if (right <= 3){
    console.log("What was my first song ever?")
    var what = readlinesync.question("1.M.I.A.M.I., 2.DJ Got Us Falling in Love, 3.Timber, 4.Culo, 5.Pitbull’s Cuban Rideout")
    while (what !== "1" && what !== "2" && what !== "3" && what !== "4" && what !== "5"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
    }
    if (what === "1"){
      console.log("That was my first single not song.")
      var right = right + 1
    }
    if (what === "2"){
      console.log("You think my career started in 2010?")
      var right = right + 1
    } 
    if (what === "3"){
      console.log("I don't even know what this song is.")
      var right = right + 1
    }
    if (what === "4"){
      console.log("Good times... oh, wrong answer.")
      var right = right + 1
    }
    if (what === "5"){
      console.log("I don't think you've ever heard of this but you're correct.")
      var righttt = 1
    }
  }
  else{

  }

  if (right <= 3){
    console.log("What was the first animated movie I was in?")
    var what = readlinesync.question("1.Epic, 2.UglyDolls, 3.Nemo, 4.Toy Story, 5.The Lego Movie")
    while (what !== "1" && what !== "2" && what !== "3" && what !== "4" && what !== "5"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
    }
    if (what === "1"){
      console.log("I loved that movie and you are correct.")
      var rightttt = 1
    }
    if (what === "2"){
      console.log("I wish I could forget being apart of that but it wasn't my first animated movie.")
      var right = right + 1
    } 
    if (what === "3"){
      console.log("If only... you are wrong.")
      var right = right + 1
    }
    if (what === "4"){
      console.log("Good times... oh, wrong answer.")
      var right = right + 1
    }
    if (what === "5"){
      console.log("I don't think you've ever heard of this but you're correct.")
      var right = right + 1
      
    }
    else {

    }
  }
  if (right <= 3){
    console.log("What was my nickname before Mr.Worldwide?")
    var what = readlinesync.question("1.Mr.Miama, 2.Armando Christian Pérez, 3.Mr.420, 4.Mr.305, 5.Mr.Florida")
    while (what !== "1" && what !== "2" && what !== "3" && what !== "4" && what !== "5"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
    }
    if (what === "1"){
      console.log("Close but wrong.")
      var right = right + 1
    }
    if (what === "2"){
      console.log("That's not my nickname so... wrong.")
      var right = right + 1
    } 
    if (what === "3"){
      console.log("Hhahaaha... wrong.")
      var right = right + 1
    }
    if (what === "4"){
      console.log("Miami represent!")
      var righttttt = 1
    }
    if (what === "5"){
      console.log("I am from there but you're wrong.")
      var right = right + 1
      
    }
    else{

    }
    
  }
  if (right <= 3){
    console.log("When did I become Mr.Wordlwide?")
    var what = readlinesync.question("1.2008, 2.2009, 3.2010, 4.2011, 5.2015")
    while (what !== "1" && what !== "2" && what !== "3" && what !== "4" && what !== "5"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
    }
    if (what === "1"){
      console.log("Ah to go back to when I was younger... Wrong.")
      var right = right + 1
    }
    if (what === "2"){
      console.log("The year when it all started... Correct.")
      var rightttttt = 1
    } 
    if (what === "3"){
      console.log("One year away but wrong.")
      var right = right + 1
    }
    if (what === "4"){
      console.log("Ooooh sorry that's wrong.")
      var right = right + 1

    }
    if (what === "5"){
      console.log("I'm not that young cabrito.")
      var right = right + 1
    }
    else{

    }
    
  }
  if (right <= 3){
    console.log("What is my net worth?")
    var what = readlinesync.question("1.$100,000,000, 2.$200,000,000, 3.$1,000,000,000, 4.$10,000, 5.1981")
    while (what !== "1" && what !== "2" && what !== "3" && what !== "4" && what !== "5"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
    }
    if (what === "1"){
      console.log("Lucky Guess... you are correct.")
      var righttttttt = 1
    }
    if (what === "2"){
      console.log("$100 million off... wrong.")
      var right = right + 1
    } 
    if (what === "3"){
      console.log("You flatter me but it's still wrong.")
      var right = right + 1
    }
    if (what === "4"){
      console.log("You little- Wrong.")
      var right = right + 1
    }
    if (what === "5"){
      console.log("Birth date not net worth... wrong.")
      var right = right + 1
    }
    else{

    }
    
  }
  if (right <= 3){
    console.log("What were the first enemies you fought against?")
    var what = readlinesync.question("1.A Plastic Fork, 2.An evil wizard, 3.An old man, 4.Pitbull, 5.Two thugs")
    while (what !== "1" && what !== "2" && what !== "3" && what !== "4" && what !== "5"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
    }
    if (what === "1"){
      console.log("Close but not the first enemy you ever fought.")
      var right = right + 1
    }
    if (what === "2"){
      console.log("I think you have the timeline backwards.")
      var right = right + 1
    } 
    if (what === "3"){
      console.log("Have you even met an old man yet? Wrong.")
      var right = right + 1
    }
    if (what === "4"){
      console.log("... Wrong.")
      var right = right + 1

    }
    if (what === "5"){
      console.log("Good answer... Correct!")
      var rightttttttt = 1
    }
    else{

    }
    }
  if (right <= 3){
    console.log("What was my fourth album?")
    var what = readlinesync.question("1.Libertad 548, 2.M.I.A.M.I., 3.Rebelution, 4.Mr.Worldwide, 5.El Mariel")
    while (what !== "1" && what !== "2" && what !== "3" && what !== "4" && what !== "5"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
    }
    if (what === "1"){
      console.log("That's my most recent album... wrong.")
      var right = right + 1
    }
    if (what === "2"){
      console.log("That was my first album... wrong.")
      var right = right + 1
    } 
    if (what === "3"){
      console.log("A true fan... you are correct.")
      var righttttttttt = 1
    }
    if (what === "4"){
      console.log("Incorrect.")
      var right = right + 1
    }
    if (what === "5"){
      console.log("Halfway there but still wrong.")
      var right = right + 1
    }
    else{

    }
    }
  if (right <= 3){
    console.log("Are you ready to face the wizard?")
    var what = readlinesync.question("1.Yes., 2. No.")
    while (what !== "1" && what !== "2"){
      var what = readlinesync.question("1, 2, 3, 4, or 5?")
    }
    if (what === "1"){
      console.log("Yes.")
      var done = 1
    }
    if (what === "2"){
      console.log("No.")
      var done = 0
    } 
  else{

  }
  if (right === 3){
    var keepgoing = readlinesync.question("You lost... that's rough buddy. Want to try again? Type Yes to try again or type No to wimp out.")
    while (keepgoing !== "Yes" && keepgoing !== "No")
    if (keepgoing === "Yes"){
      console.log("Good choice.")
      await quiz()
    }
    if (keepgoing === "No"){

    }
  }
  if (done = 1){
    console.log("Now is the time to reveal that I too hate the evil wizard hermano.")
    console.log("To help you on your journey I will lend you some of my infinite immeasurable strength.")
    player["attack"] = player["attack"] + 1
    player["maxhp"] = player["maxhp"] + 200
    console.log("I have given you 1 attack and 200 health.")
    console.log("Now go and save the world.")
    

  }
  }
  
}
/*
What happens once the player reaches the underground entrance?
fights enemies between 4-7
the polluter
fight more polluters
fight random enemies
shopkeeper

first song ever 
fourth album Rebelution
disney movie
what was his name before mr.worldwide mr.305
When did pitbull become mr.worldwide 2009
what is pitbull's net worth $100 Million
what were the first enemies you fought against.
are you ready to face the wizard?

two gatekeepers one weak other strongest
100 enemies lunge pitbull stops them.
disco ball fight with pitbull(special fight no combat)
(non-combat: timer based actions, quiz, etc?)
if you win get crown which gives sword 
run out of city with cieling falling timed rock dodge
quiz:
questions about Pitbull and hero's journey.
answers within a certain time requirement
4-5 options
1 free response
shop at the end 
2 strikes

*/

async function game() {
  await choosecharacter()
  if (player["state"] === 0) {
    await intro()
     
  }
 if (player["state"] === 1) {
   await fight1() 
 }
 if (player["state"] === 2) {
   await scene2()
 }
 if (player["state"] === 3) {
   await scene3()
 }
 if (player["state"] === 4) {
   await scene4()
   await entershop()
   await combt()
 }
 if (player["state"] === 5) {
   await scene5()
 }
  if (player["state"] === 6) {
    await scene6()
  }
  if (player["state"] === 7) {
    await scene7()
    await quiz()
  }
  
}
game()



//Fighting plans:




//Choose your weapon every time you go to attack
//Can also choose to heal, or use some other item
//Two turns because our companion can attack (we will start with 1)
//Can fight multiple enemies

//RNG on fighting things (maybe a set number, +/- some amount)
//Pre-determined path the player figures out (could also be random)

//choose wether to fight or run.
//choose which character to play as
//choose what action to take attack or use item
//chpoose who to fight or who to use item on
//ask if player wants to switch characters, keep going, or leave.
//Ends when everyone fighting dies
async function combt(enemy = randomenemy()){
 // var enemy = randomenemy()
  console.log(enemy)
  var fighttt = "1"
  while (fighttt === "1"){
    fighttt = "0"
    var playercopy = createEnemy(player)
    var enemycopy = createEnemy(enemy)
    
    var fight = readlinesync.question("A wild " + enemy["name"] + " appeared. Would you like to fight it? Type yes or no?")
    while (fight !== "yes" && fight !== "no"){
      var fight = readlinesync.question("Type yes to fight and no to run.")
    }
    if (fight === "yes"){
      console.log("The fight begins.")
      
    
      console.log("You lunge into battle.")
      
      for (var i = 0; i < player["items"].length; i++) {
        console.log(i + " - " + player["items"][i])
      }
      var askitem = readlinesync.question("Would you like to use any of these items?")
      console.log(askitem)
      // choose 0, 1, or 2 - index
      var itemkey = player["items"][Number(askitem)]
      console.log(itemkey)
      var chosenitem = itemsdetails[itemkey]
      console.log(chosenitem)
      while (player["hp"] > 0 && enemy["hp"] > 0){
        var fightt = readlinesync.question("Type 1 for you and the kid strike with your current weapons or type 2 to run away or type 3 to use an item")
        while (fightt !=="1" && fightt !=="2" && fightt !== "3"){
          var fightt = readlinesync.question("1 for you and the kid to strike with your current weapon or type 2 to run away")
        }
      
      
        if (fightt === "1"){
          var damage = randomNumber(Number(chosenitem.mindamage), Number(chosenitem.maxdamage))*Number(baseplayer.attack)
          *randomNumber(2,4)
          var thekiddamage = randomNumber(Number(itemsdetails["mace"].mindamage), Number(itemsdetails["mace"].maxdamage) * Number(thekid.attack) * randomNumber(2,3))
          console.log(damage)
          console.log(thekiddamage)
          enemy["hp"] = enemy["hp"] - damage
          enemy["hp"] = enemy["hp"] - thekiddamage
          console.log("You did " + damage + " to the " + enemy["name"] + "!")
          console.log("The kid did " + damage + " to the " + enemy["name"] + "!")
          enemydamage = Math.ceil(enemy["attack"]  * 0.8 * enemy["attack"] * randomNumber(0,3))
          console.log(enemydamage)
          if (enemy["hp"] > 0){
            player["hp"] = player["hp"] - enemydamage
      
            console.log("You have " + player["hp"] + " health " + "and the " + enemy["name"] + " enemy has " + enemy["hp"] + " health")


          
          }
          if (enemy["hp"] < 1){
            console.log("YOU WON! The " + enemy["name"] + " has been defeated!")
            var plusmoney = randomNumber(enemy["mingold"], enemy["maxgold"])
            player["money"] = player["money"] + 
            console.log("You found " + plusmoney + " in the dead " + enemy["name"] +"'s body!")
          }
          if (player["hp"]< 1){
            console.log("You lost. The " + enemy["name"] + " continues it's rampage.")
            var death = readlinesync.question("Would you like to try again, 1, or would you like to continue onward, 2.")
            if (death === "1"){
              player = createEnemy(playercopy)
              enemy = createEnemy(enemycopy)
              
              
              var fighttt = "1"
            }
            if (death === "2"){
              player =  createEnemy(playercopy)
              enemy = createEnemy(enemycopy)




            }
          }
        }
        if (fightt === "2"){
          console.log("You run away.")
      
        }
        if (fightt === "3"){
        for (var i = 0; i < player["items"].length; i++) {
        console.log(i + " - " + player["items"][i])
        }
        var askitem = readlinesync.question("Would you like to use any of these items?")
        console.log(askitem)
        var itemkey = player["items"][Number(askitem)]
       console.log(itemkey)
        var chosenitem = itemsdetails[itemkey]
        console.log(chosenitem)
        if(chosenitem.healing <= 0){
          console.log("Please choose a different item.")
          var askitem = readlinesync.question("Would you like to use any of these items?")
          console.log(askitem)
          
        }
        else{
          console.log("You used the " + askitem + ".")
          player["hp"] = player["hp"] + askitem.healing
        }
        

        
        }
        

    }

      
    }
    if (fight === "no"){
      console.log("You run away.")
      console.log()
    }
  }
  
}
async function combt2(){
  var enemy = randomenemy()
  console.log(enemy)
  var fighttt = "1"
  while (fighttt === "1"){
    fighttt = "0"
    var playercopy = createEnemy(player)
    var enemycopy = createEnemy(enemy)
    
    var fight = readlinesync.question("A wild " + enemy["name"] + " appeared. Would you like to fight it? Type yes or no?")
    while (fight !== "yes" && fight !== "no"){
      var fight = readlinesync.question("Type yes to fight and no to run.")
    }
    if (fight === "yes"){
      console.log("The fight begins.")
      
    
      console.log("You lunge into battle.")
      
      for (var i = 0; i < player["items"].length; i++) {
        console.log(i + " - " + player["items"][i])
      }
      var askitem = readlinesync.question("Would you like to use any of these items?")
      console.log(askitem)
      // choose 0, 1, or 2 - index
      var itemkey = player["items"][Number(askitem)]
      console.log(itemkey)
      var chosenitem = itemsdetails[itemkey]
      console.log(chosenitem)

      while (player["hp"] > 0 && enemy["hp"] > 0){
        var fightt = readlinesync.question("Type 1 for you and the kid strike with your current weapons or type 2 to run away or type 3 to use an item")
        while (fightt !=="1" && fightt !=="2" && fightt !== "3"){
          var fightt = readlinesync.question("1 for you and the kid to strike with your current weapon or type 2 to run away")
        }
      
      
        if (fightt === "1"){
          var damage = randomNumber(Number(chosenitem.mindamage), Number(chosenitem.maxdamage))*Number(baseplayer.attack)
          *randomNumber(2,4)
          var thekiddamage = randomNumber(Number(itemsdetails["mace"].mindamage), Number(itemsdetails["mace"].maxdamage) * Number(thekid.attack) * randomNumber(2,3))
          console.log(damage)
          console.log(thekiddamage)
          enemy["hp"] = enemy["hp"] - damage
          enemy["hp"] = enemy["hp"] - thekiddamage
          console.log("You did " + damage + " to the " + enemy["name"] + "!")
          console.log("The kid did " + damage + " to the " + enemy["name"] + "!")
          enemydamage = Math.ceil(enemy["attack"]  * 0.8 * enemy["attack"] * randomNumber(0,3))
          console.log(enemydamage)
          if (enemy["hp"] > 0){
            player["hp"] = player["hp"] - enemydamage
      
            console.log("You have " + player["hp"] + " health " + "and the " + enemy["name"] + " enemy has " + enemy["hp"] + " health")


          
          }
          if (enemy["hp"] < 1){
            console.log("YOU WON! The " + enemy["name"] + " has been defeated!")
            var plusmoney = randomNumber(enemy["mingold"], enemy["maxgold"])
            player["money"] = player["money"] + 
            console.log("You found " + plusmoney + " in the dead " + enemy["name"] +"'s body!")
          }
          if (player["hp"]< 1){
            console.log("You lost. The " + enemy["name"] + " continues it's rampage.")
            var death = readlinesync.question("Would you like to try again, 1, or would you like to continue onward, 2.")
            if (death === "1"){
              player = createEnemy(playercopy)
              enemy = createEnemy(enemycopy)
              
              
              var fighttt = "1"
            }
            if (death === "2"){
              player =  createEnemy(playercopy)
              enemy = createEnemy(enemycopy)


            }
          }
        }
        if (fightt === "2"){
          console.log("You run away.")
      
        }
        if (fightt === "3"){
        for (var i = 0; i < player["items"].length; i++) {
        console.log(i + " - " + player["items"][i])
        }
        var askitem = readlinesync.question("Would you like to use any of these items?")
        console.log(askitem)
        var itemkey = player["items"][Number(askitem)]
       console.log(itemkey)
        var chosenitem = itemsdetails[itemkey]
        console.log(chosenitem)
        if(chosenitem.healing <= 0){
          console.log("Please choose a different item.")
          var askitem = readlinesync.question("Would you like to use any of these items?")
          console.log(askitem)
          
        }
        else{
          console.log("You used the " + askitem + ".")
          player["hp"] = player["hp"] + askitem.healing
        }
        

        
        }
        

    }

      
    }
    if (fight === "no"){
      console.log("You run away.")
      console.log()
    }
  }
  
}




async function combt3(enemyType = null){
  var enemy = null
  if (enemyType == null) {
    enemy = randomenemy()
  }
  else {
    enemy = createEnemy(enemyType)
  }
  
  console.log(enemy)
  var fighttt = "1"
  while (fighttt === "1"){
    fighttt = "0"
    var playercopy = createEnemy(player)
    var enemycopy = createEnemy(enemy)
    
    var fight = readlinesync.question("A wild " + "polluter" + " appeared. Would you like to fight it? Type yes or no?")
    while (fight !== "yes" && fight !== "no"){
      var fight = readlinesync.question("Type yes to fight and no to run.")
    }
    if (fight === "yes"){
      console.log("The fight begins.")
      
    
      console.log("You lunge into battle.")
      
      for (var i = 0; i < player["items"].length; i++) {
        console.log(i + " - " + player["items"][i])
      }
      var askitem = readlinesync.question("Would you like to use any of these items?")
      console.log(askitem)
      // choose 0, 1, or 2 - index
      var itemkey = player["items"][Number(askitem)]
      console.log(itemkey)
      var chosenitem = itemsdetails[itemkey]
      console.log(chosenitem)
      console.log(player["hp"])
      console.log(enemy["hp"])
      while (player["hp"] > 0 && enemy["hp"] > 0){
        var fightt = readlinesync.question("Type 1 for you and the kid strike with your current weapons or type 2 to run away or type 3 to use an item")
        while (fightt !=="1" && fightt !=="2" && fightt !== "3"){
          var fightt = readlinesync.question("1 for you and the kid to strike with your current weapon or type 2 to run away")
        }
      
      
        if (fightt === "1"){
          var damage = randomNumber(Number(chosenitem.mindamage), Number(chosenitem.maxdamage))*Number(baseplayer.attack)
          *randomNumber(2,4)
          var thekiddamage = randomNumber(Number(itemsdetails["mace"].mindamage), Number(itemsdetails["mace"].maxdamage) * Number(thekid.attack) * randomNumber(2,3))
          console.log(damage)
          console.log(thekiddamage)
          enemy["hp"] = enemy["hp"] - damage
          enemy["hp"] = enemy["hp"] - thekiddamage
          console.log("You did " + damage + " to the " + enemy["name"] + "!")
          console.log("The kid did " + damage + " to the " + enemy["name"] + "!")
          enemydamage = Math.ceil(enemy["attack"]  * 0.8 * enemy["attack"] * randomNumber(0,3))
          console.log(enemydamage)
          if (enemy["hp"] > 0){
            player["hp"] = player["hp"] - enemydamage
      
            console.log("You have " + player["hp"] + " health " + "and the " + enemy["name"] + " enemy has " + enemy["hp"] + " health")


          
          }
          if (enemy["hp"] < 1){
            console.log("YOU WON! The " + enemy["name"] + " has been defeated!")
            var plusmoney = randomNumber(enemy["mingold"], enemy["maxgold"])
            player["money"] = player["money"] + 
            console.log("You found " + plusmoney + " in the dead " + enemy["name"] +"'s body!")
          }
          if (player["hp"]< 1){
            console.log("You lost. The " + enemy["name"] + " continues it's rampage.")
            var death = readlinesync.question("Would you like to try again, 1, or would you like to continue onward, 2.")
            if (death === "1"){
              player = createEnemy(playercopy)
              enemy = createEnemy(enemycopy)
              
              
              var fighttt = "1"
            }
            if (death === "2"){
              player =  createEnemy(playercopy)
              enemy = createEnemy(enemycopy)


            }
          }
        }
        if (fightt === "2"){
          console.log("You run away.")
          return combt(false)
      
        }
        if (fightt === "3"){
        for (var i = 0; i < player["items"].length; i++) {
        console.log(i + " - " + player["items"][i])
        }
        var askitem = readlinesync.question("Would you like to use any of these items?")
        console.log(askitem)
        var itemkey = player["items"][Number(askitem)]
       console.log(itemkey)
        var chosenitem = itemsdetails[itemkey]
        console.log(chosenitem)
        if(chosenitem.healing <= 0){
          console.log("Please choose a different item.")
          var askitem = readlinesync.question("Would you like to use any of these items?")
          console.log(askitem)
          
        }
        else{
          console.log("You used the " + askitem + ".")
          player["hp"] = player["hp"] + askitem.healing
        }
        

        
        }
        

    }

      
    }
    if (fight === "no"){
      console.log("You run away.")
      console.log()
    }
  }
  
}




function createEnemy(enemy) {
  return Object.assign({}, enemy)
}

function randomenemy() {
  var enemynames = Object.keys(enemies)
  console.log(enemynames)
  var enemycount = enemynames.length-1
  console.log(enemycount)
  
  var enemyrange = randomNumber(0, enemycount)
  console.log(enemyrange)
  console.log(enemynames[enemyrange])
  console.log(enemies[enemynames[enemyrange]])
  var enemy = enemies[enemynames[enemyrange]]
  
  // Return actual random enemy
  // return createEnemy(enemies[enemynames[enemyrange]])

  // TESTING - return specific enemy
  return createEnemy(enemy)
  
}

// __COMPLETED__
// Enemy appears
// Choose if you want to fight or run
// Choose character to fight
// Choose weapon
// Choose to fight with weapon
// Calculate damage with rng in a range.
// 100 - dmg
// damage x damage-1
// rng min-max x 10 = damage done.
// HW - Change damage of everything enemy and player.
// HW - if player dies player is brought to fight or run descision
//have health and other stuff restored when dead.
// HW - if enemy dies player gets gold and an item
// HW - Fix robber combat and rewards
// HW - choose an item, like healing
// Kid in fight own weapon and damage
// Get all scenes working when playing a new character

// __TODO__
// HW Scene 4 finish - story, sidekick asks about the map, go to scene 5 (journey + combat)
// HW Decide what happens after scene 4 - how does the combat work on our journey? DESCRIBE IN THE COMMENTS HOW YOU WANT THIS TO WORK
// HW - randomly trigger fights (wait until first 4 scenes are working properly)

// Finish creating the shop
// Journey - Add in repetitive combat
// Fight underling - boss fight thing
//interrogate for info about wizard

// player action
// kid action
// enemy action
// repeat?

// kid actions:
// attacks
// kid needs attack data[]
// item?

// items:
// health potions

// Add third option in the fight to use an 
