// Code your solutions in this file

const names = ["Lisa", "Kaitlin", "Jan"]

function writeCards(names) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return cards;
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
      console.log(countDown);
      countDown -= 1;
    }
    console.log
}