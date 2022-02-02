const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

function reverseWithoutSpCh(str) {
    let inputStr = new String(str);
    const inputArr = inputStr.split('');
    let spChArr = [];
    let alphabetArr = [];
    inputArr.map((ch, i) => {
        if (specialCharacterRegex.test(ch)) {
            spChArr.push({
                character: ch,
                index: i
            });
        } else {
            alphabetArr.push(ch);
        }
    });
    alphabetArr.reverse();

    spChArr.map(special => {
        alphabetArr.splice(special.index, 0, special.character)
    });

    return alphabetArr.join('');
}

console.log(reverseWithoutSpCh('abc****d'));