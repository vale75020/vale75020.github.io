var player1 = true;
var player2 = false;
var roll = document.getElementById("roll");
var score1 = document.getElementById("scorecurr1");
var score2 = document.getElementById("scorecurr2");
var nuovo = document.getElementById("new")
var hold = document.getElementById("hold")
var d1 = document.getElementById("dado1");
var d2 = document.getElementById("dado2");
var holdsum1 = 0;
var holdsum2 = 0;
var sum = 0;
var scorehold1 = document.getElementById("score1");
var scorehold2 = document.getElementById("score2");
var win = document.getElementById("win");

roll.onclick = function () {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    d1.src = 'images/dice-' + dado1 + '.png';
    d2.src = 'images/dice-' + dado2 + '.png';
    var sumprov = dado1 + dado2;
    win.innerHTML = "";

    if (dado1 === 1 || dado2 === 1) {
        sum = 0;
        if (player1) {
            player2 = true;
            player1 = false;
            score1.innerHTML = 0;
            win.innerHTML = "YOU LOOSE!!!";
        } else {
            player2 = false;
            player1 = true;
            score2.innerHTML = 0;
            win.innerHTML = "YOU LOOSE!!!";
        }
    } else {
        sum += sumprov;
        if (player1) {
            score1.innerHTML = sum;
        } else {
            score2.innerHTML = sum;
        }
    }
}

nuovo.onclick = function () {
    scorehold1.innerHTML = 0;
    scorehold2.innerHTML = 0;
    score1.innerHTML = 0;
    score2.innerHTML = 0;
    sum = 0;
    d1.src = 'images/164090.png';
    d2.src = 'images/164090.png';

}

hold.onclick = function holder() {


    if (player1) {
        holdsum1 += sum;
        if (holdsum1 < 100) {
            player2 = true;
            player1 = false;
            scorehold1.innerHTML = holdsum1;
        } else {
            win.innerHTML = "YOU WIN!!!"
        }

    } else {
        holdsum2 += sum;
        if (holdsum2 < 100) {
            player2 = false;
            player1 = true;
            scorehold2.innerHTML = holdsum2;
        } else {
            win.innerHTML = "YOU WIN!!!";
        }
    }
    sum = 0;
}
