const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodedMessage = '';
    let startIndex = 0;
    let endIndex = 9;
    let decodedSymbol = '';
    while (endIndex <= expr.length - 1) {
        let encodedSymbol = expr.slice(startIndex, endIndex + 1);
        let i;
        for (i = 0; i < encodedSymbol.length; i++) {
            if (encodedSymbol[i] !== '*') {
                break;
            }
        }
        if (i === encodedSymbol.length) {
            decodedMessage = decodedMessage + ' ';
        } else {
            for (let j = 0; j < encodedSymbol.length; j += 2) {
                if (encodedSymbol.slice(j, j + 2) === '10') {
                    decodedSymbol = decodedSymbol + '.';
                } else if (encodedSymbol.slice(j, j + 2) === '11') {
                    decodedSymbol = decodedSymbol + '-';
                }
            }
            decodedMessage = decodedMessage + MORSE_TABLE[decodedSymbol];
        }
        startIndex += 10;
        endIndex += 10;
        decodedSymbol = '';
    }
    return decodedMessage;
}

module.exports = {
    decode
}