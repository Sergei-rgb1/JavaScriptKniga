var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;

var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Готовность, целься, огонь! (введите номер 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Пожалуйста, введите действительный номер мобильного телефона!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("Попадание!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;

        alert("Ты потопил мой линкор!")
      }
    } else {
      alert("Промах!");
    }
  }
}
var stats = "Ты решил" + guesses + " потопить линкор, " +
  "и это значит, что твоя точность стрельбы на высоте!" + (3 / guesses);
alert(stats);
