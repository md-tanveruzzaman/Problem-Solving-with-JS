function chessBoard(square) {
    if (checkValidInput(square)) {
        const alphabet = square.split('')[0];
        const numb = square.split('')[1];
        const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let color = ''
        alphabets.map((alpha, index) => {
            if ((index + 1) % 2 === 0 && alpha === alphabet && (Number(numb) % 2 !== 0)) {
                color = 'White';
            }
            if ((index + 1) % 2 !== 0 && alpha === alphabet && (Number(numb) % 2 !== 0)) {
                color = 'Black';
            }
        });
        return color;
    } else {
        return 'Not a expected input';
    }
}

function checkValidInput(input) {
    if (input
        && input.length === 2
        && Number(input.charAt(1)) > 0
        && Number(input.charAt(1)) < 9
        && /^[a-h]/i.test(input)) {
        return true;
    }
}

console.log(chessBoard('d1'));