
function generatorNumber(min, max) {
    
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    let count = 10;
    return function askNumber() {
            let num = prompt('Угадай число от 1 до 100', '');
            
            if(num === null) {
                 alert('Игра окончена.');
            } else if(isNaN(num) || num.trim() === '') {
                alert('Введи число!');
                askNumber();
            } else if(num) {
                    count--;
                    if(count === 0) {
                        let endGames = confirm('Попытки закончились, хотите сыграть еще?');
                        if(endGames) {
                            count = 10;
                            randomNum = Math.floor(Math.random() * (max - min + 1) + min);
                            games();
                        } else {
                            alert ('Отличная игра, приходите еще.');
                        }
                    } else if(num > randomNum) {
                            alert(`Загаданное число меньше, осталось попыток ${count}`);
                            askNumber();
                        } else if(num < randomNum) {
                            alert(`Загаданное число больше, осталось попыток ${count}`);
                            askNumber();
                        } else if (+num === randomNum) {
                            
                            let agreement = confirm(`Поздравляю, Вы угадали!!! Хотели бы сыграть еще?`);
                            if(agreement) {
                                count = 10;
                                randomNum = Math.floor(Math.random() * (max - min + 1) + min);
                                games();
                            } else {
                                alert ('Отличная игра, приходите еще.');
                            }
                        }
                    
            }
            
            return;
             
    };
}
let games = generatorNumber(1, 100);
games();