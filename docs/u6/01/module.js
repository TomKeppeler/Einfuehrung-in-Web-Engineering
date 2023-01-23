const input = document.getElementById('input');

function checkKlammern() {
    const text = input.value;
    const klammern = [];
    const paare = {
        '[': ']',
        '(': ')',
        '{': '}'
    };
    let valid = true;

    for (let i = 0; i < text.length; i++) {
        const character = text[i];
        if (character === '[' || character === '(' || character === '{') {
            klammern.push(character);
        } else if (character === ']' || character === ')' || character === '}') {
            if (klammern.length === 0 || paare[klammern.pop()] !== character) {
                valid = false;
                break;
            }
        }
    }

    if (valid && klammern.length === 0) {
        console.log('Die Klammern sind korrekt geschachtelt.');
        input.style.color = 'black';
    } else {
        console.log('Die Klammern sind nicht korrekt geschachtelt.');
        input.style.color = 'red';
    }
}