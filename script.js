/* eslint-disable */

// We can have a table of the types and how much dmg they do to all other types.
// Something like types["Water"][0] would return how much dmg water does to Normal types (1 in this case), and types["Water"][2] would
// return how much dmg water does to fire types (2 in this case) etc
//
// The vectorization of the dmg to other types would follow the order in which they appear in "types". That is:
// [Normal, Fire, Water, Electirc, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy]
// No effect and not very effective = 0
// Normal = 1
// Super effective = 2
//

const effectiveness_chart = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0], // Normal
  [1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0, 1, 0, 1, 2, 1], // Fire
  [1, 2, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0, 1, 1, 1], // Water
  [1, 1, 2, 0, 0, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0, 1, 1, 1], // Electric
  [1, 0, 2, 1, 0, 1, 1, 0, 2, 0, 1, 0, 2, 1, 0, 1, 0, 1], // Grass
  [1, 0, 0, 1, 2, 0, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0, 1], // Ice
  [2, 1, 1, 1, 1, 2, 1, 0, 1, 0, 0, 0, 2, 0, 1, 2, 2, 0], // Fighting
  [1, 1, 1, 1, 2, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 2], // Poison
  [1, 2, 1, 2, 0, 1, 1, 2, 1, 0, 1, 0, 2, 1, 1, 1, 2, 1], // Ground
  [1, 1, 1, 0, 2, 1, 2, 1, 1, 1, 1, 2, 0, 1, 1, 1, 2, 1], // Flying
  [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1], // Psychic
  [1, 0, 1, 1, 2, 1, 0, 0, 1, 0, 2, 1, 1, 0, 1, 2, 0, 0], // Bug
  [1, 2, 1, 1, 1, 2, 0, 1, 0, 2, 1, 2, 1, 1, 1, 1, 0, 1], // Rock
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0, 1, 1], // Ghost
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 0], // Dragon
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 2, 1, 1, 2, 1, 0, 1, 0], // Dark
  [1, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2], // Steel
  [1, 0, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 2, 2, 0, 1], // Fairy
];

const types_to_num = {
  Normal: 0,
  Fire: 1,
  Water: 2,
  Electric: 3,
  Grass: 4,
  Ice: 5,
  Fighting: 6,
  Poison: 7,
  Ground: 8,
  Flying: 9,
  Psychic: 10,
  Bug: 11,
  Rock: 12,
  Ghost: 13,
  Dragon: 14,
  Dark: 15,
  Steel: 16,
  Fairy: 17,
};

const num_to_types = {
  0: "Normal",
  1: "Fire",
  2: "Water",
  3: "Electric",
  4: "Grass",
  5: "Ice",
  6: "Fighting",
  7: "Poison",
  8: "Ground",
  9: "Flying",
  10: "Psychic",
  11: "Bug",
  12: "Rock",
  13: "Ghost",
  14: "Dragon",
  15: "Dark",
  16: "Steel",
  17: "Fairy",
};

let user_type;
let user_choice;
let user_dmg;
let pc_choice;
let pc_dmg;
let player1;
let player2;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function get_computer_choice() {
  return Math.floor(Math.random() * 18);
}

document.addEventListener("DOMContentLoaded", function() {
  const selection_boxes = document.querySelectorAll(".selection_box");
  selection_boxes.forEach((div) => {
    div.addEventListener("click", function() {
      pc_choice = get_computer_choice();
      user_type = capitalize(this.id);
      user_choice = types_to_num[user_type];
      user_dmg = effectiveness_chart[user_choice][pc_choice];
      pc_dmg = effectiveness_chart[pc_choice][user_choice];
      player1 = num_to_types[user_choice];
      player2 = num_to_types[pc_choice];

      console.log(player1 + " vs. " + player2);

      if (user_dmg > pc_dmg) {
        console.log(player1 + " wins");
      } else if (pc_dmg > user_dmg) {
        console.log(player2 + " wins");
      } else if (user_dmg === pc_dmg) {
        console.log("Tie");
      } else {
        console.log("I don't know bro LMAO");
      }
    });
  });
});
