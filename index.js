const Assassin = require('./Assassin')
const Knight = require('./Knight')
const Mage = require('./Mage')

const Junah = new Mage('junah', 90, 100, 200, 50)
const Strohl = new Assassin('Strohl', 200, 100, 50, 50) 
const Hukeberg = new Knight('Hukeberg', 100, 200, 200, 100)
//mudandoa a posiçao de ataque para defesa, e defendendo hukeberg
Hukeberg.switchStance()
Strohl.Attack(Hukeberg)
Junah.Attack(Strohl) 

console.table({Junah, Strohl, Hukeberg})
//mudandoa a posiçao de defesa para ataque e atacando strohl
Hukeberg.switchStance()
Hukeberg.Attack(Strohl)
Junah.heal(Strohl) //curando o personagem que foi atacado
Junah.Attack(Hukeberg)

console.table({Junah, Strohl, Hukeberg})


