const suspectsArray = ["Playboi Carti", "Travis Scott", "Celine Dion", "Lebron James", "Asap Rocky", "Mr. Pluto"];
const weaponsArray = ["Rope", "Knife", "Candlestick", "Revolver", "Lead Pipe", "Wrench", "Poison", "Axe"];
const roomsArray = ["Kitchen", "Ballroom", "Conservatory", "Dining Room", "bathroom", "Library", "Lounge", "Hall", "Study", "Cellar"];

function selectRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  };
}

function revealMystery(mystery) {
  return `${mystery.suspect} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}!`;
}

document.getElementById('reveal-btn').addEventListener('click', function() {
  const mystery = pickMystery();
  document.getElementById('mystery-output').textContent = revealMystery(mystery);
});
