/*
Wars
    Names = string
    Factions = string
    Size = objects  
        Wepons= intergers
        Soliders = objects
        Battles = objects
        Battles = grunt
*/

function randomGenerator(item) {
   if (!item) {
       var randBool = Math.round(Math.random());

       if (randBool === 1) {
           return true;
       } else {
           return false;
       }
   }
   if (typeof item === "number") {
    return Math.ceil(Math.random() * item);
}

return item[Math.floor(Math.random() * item.length)];


}
// Build Solider Function
// no Parameters neccessary yet
// Returns a solider object
function buildSolider() {
    var weapons = ["pistol", "machinegun", "rifle", "sword", "knife"];
    var names = ["Mark", "John", "Phil", "Rob", "Harold", "Nick", "Bob"];

    /*
   Solider = object
   Name = string
   Weapon = string
   Backpack = boolean
   Raido = boolean 
   */
   return {
    Name: randomGenerator(names),
    Weapon: randomGenerator(weapons),
    Backpack: randomGenerator(),
    Raido: randomGenerator()
}
}
// Takes no Params
// Returns a random ship object
function newwars() {
    /*
 Wars
    Names = string
    Factions = string
    Size = objects  
        Wepons= intergers
        Soliders = objects
        Battles = objects
        Battles = grunt
    */
    var warnames = ["DDay", "Revolutionary", "Paris war", "Berlin"];
    var faction = ["French", "British", "Russia", "US"];
    var weapons = [0, 5, 10, 20, 30];

    return {
        Name: randomGenerator(warnames),
        Factions: randomGenerator(faction),
        Size: {
            weapons: randomGenerator(weapons)
        }
    };
}


for (var i = 0; i < 20; i++) {
   console.log(buildSolider());
}