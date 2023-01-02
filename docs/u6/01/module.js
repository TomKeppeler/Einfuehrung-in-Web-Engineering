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
        const charakter = text[i];
        if (charakter === '[' || charakter === '(' || charakter === '{') {
            klammern.push(charakter);
        } else if (charakter === ']' || charakter === ')' || charakter === '}') {
            if (klammern.length === 0 || paare[klammern.pop()] !== charakter) {
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