let playerName = prompt('Привет, как тебя зовут?');

while (playerName == '' || playerName == null) {
    playerName = prompt('Введи пожалуйста своё имя или никнэйм');
} 

alert(playerName + ', я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "угадал".');  

let number = random(100);
let guess = prompt('Какое число я загадал?');
let numberOfGuesses = 0;

while(guess != number) {
    if (guess > number) {
        guess = prompt('Много. Попробуй ещё раз.');
        numberOfGuesses = numberOfGuesses + 1;
    }

    if (guess < number) {
        guess = prompt('Мало. Попробуй ещё раз.');
        numberOfGuesses = numberOfGuesses + 1;
    }    
}

alert('Поздравляю ты отгадал! Это число ' + number + '. Тебе понадобилось ' + numberOfGuesses + ' попыток.');



