var location1 = 3;
var location2 = 4;
var location3 = 5;

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
        if (guess == location1 || guess == location2 || guess location3) {
          hits = hits +1  
        }
    }
}






if (guess == location1) {
    hits = hits + 1;
} else if (guess == location2) {
    hits = hits + 1;
} else if (guess == location3) {
    hits = hits + 1;
}
