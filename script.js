$(document).ready(function(){

    $('.main').css({ 'right': '405px' });
    let winNumber;

    setTimeout(spinRoulette, 3000);

    function spinRoulette() {

        $('.betRed, .betBlack, .betGreen').attr('disabled', true);
        $('.betRed, .betBlack, .betGreen').css({
            opacity: 0.2
        });

        $('.front').animate({
            width: 100 + '%'
        }, 1000);

        let ran = Math.floor(Math.random() * 15); 

        switch (ran) {
            case 0: winNumber = 0;
                colorWin = 'green';
                break;
            case 1: winNumber = 11;
                colorWin = 'black';
                break;
            case 2: winNumber = 5;
                colorWin = 'red';
                break;
            case 3: winNumber = 10;
                colorWin = 'black';
                break;
            case 4: winNumber = 6;
                colorWin = 'red';
                break;
            case 5: winNumber = 9;
                colorWin = 'black';
                break;
            case 6: winNumber = 7;
                colorWin = 'red';
                break;
            case 7: winNumber = 8;
                colorWin = 'black';
                break;
            case 8: winNumber = 1;
                colorWin = 'red';
                break;
            case 9: winNumber = 14;
                colorWin = 'black';
                break;
            case 10: winNumber = 2;
                colorWin = 'red';
                break;
            case 11: winNumber = 13;
                colorWin = 'black';
                break;
            case 12: winNumber = 3;
                colorWin = 'red';
                break;
            case 13: winNumber = 12;
                colorWin = 'black';
                break;
            case 14: winNumber = 4;
                colorWin = 'red';
                break;
        }
       
        let ranMini = Math.floor(Math.random() * 48 - 24)

        $('.main').animate({
            right: 406 + 3240 + ran * 54 + ranMini
        }, 7000, 'easeOutCirc', function () {
            
                $('.main').css({ 'right': 406 + ran * 54 + ranMini });

                var lastWinNumber = $("<div></div>").text(winNumber);
                lastWinNumber.addClass(colorWin);
                $('#lastNumbersHelp').prepend(lastWinNumber);
                console.log(winNumber);

                $('.front').animate({
                    width: 0
                }, 15000, 'linear', spinRoulette);

                if (userColorBlack == true && colorWin == 'black') {

                    userBalance += 2 * currentRoundBetBlack;
                    $('.balanceValue').text('¥ ' + userBalance);

                } else if (userColorRed == true && colorWin == 'red') {

                    userBalance += 2 * currentRoundBetRed;
                    $('.balanceValue').text('¥ ' + userBalance);

                } else if (userColorGreen == true && colorWin == 'green') {

                    userBalance += 14 * currentRoundBetGreen;
                    $('.balanceValue').text('¥ ' + userBalance);

                }

                currentRoundBetRed = 0;
                currentRoundBetBlack = 0;
                currentRoundBetGreen = 0;

                userColorBlack = false;
                userColorRed = false;
                userColorGreen = false;

                $('.betRed, .betBlack, .betGreen').attr('disabled', false);
                $('.betRed, .betBlack, .betGreen').css({
                    opacity: 1
                });

                

        });
    }

    /*Калькулятор*/

    let userBalance = 500;
    let currentValueBet = 0;

    let currentRoundBetRed = 0;
    let currentRoundBetBlack = 0;
    let currentRoundBetGreen = 0;

    let userColorBlack = false;
    let userColorRed = false;
    let userColorGreen = false;

    $('.betRed').click(function () {
        if (userBalance - currentValueBet > -1) {

            userBalance -= currentValueBet;
            currentRoundBetRed += currentValueBet;
            $('.balanceValue').text('¥ ' + userBalance);
            userColorRed = true;

        }      
    });
    $('.betBlack').click(function () {
        if (userBalance - currentValueBet > -1) {

            userBalance -= currentValueBet;
            currentRoundBetBlack += currentValueBet;
            $('.balanceValue').text('¥ ' + userBalance);
            userColorBlack = true;

        }
    });
    $('.betGreen').click(function () {
        if (userBalance - currentValueBet > -1) {

            userBalance -= currentValueBet;
            currentRoundBetGreen += currentValueBet;
            $('.balanceValue').text('¥ ' + userBalance);
            userColorGreen = true;

        }
    });



    $('.ten').click(function(){
        currentValueBet += 10;
        $('.currentBet').text(currentValueBet);
    });
    $('.hundred').click(function () {
        currentValueBet += 100;
        $('.currentBet').text(currentValueBet);
    });
    $('.thousend').click(function () {
        currentValueBet += 1000;
        $('.currentBet').text(currentValueBet);
    });
    $('.thousendk').click(function () {
        currentValueBet += 10000;
        $('.currentBet').text(currentValueBet);
    });
    $('.multiply').click(function () {
        currentValueBet *= 2;
        $('.currentBet').text(currentValueBet);
    });
    $('.divide').click(function () {
        currentValueBet = Math.trunc(currentValueBet/2);
        $('.currentBet').text(currentValueBet);
    });
    $('.clear').click(function () {
        currentValueBet = 0;
        $('.currentBet').text(currentValueBet);
    });
    $('.allIn').click(function () {
        currentValueBet = userBalance;
        $('.currentBet').text(currentValueBet);
    });
});