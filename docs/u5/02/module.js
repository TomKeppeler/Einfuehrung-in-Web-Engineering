class Presenter {
    constructor(name, minuten, secounds, button) {
        this.name = name;
        this.minuten = minuten;
        this.secounds = secounds;
        this.button = button;
        this.button.addEventListener("click", () => startStop(button));
    }
}


var presenter = [];

var presenterIndex = 0;


function addPerson() {
    const presentorName = document.getElementById('input');
    if (presentorName.value !== '') {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        this.button[this.buttonIndex++] = document.createElement('button');
        this.button[this.buttonIndex - 1].innerHTML = presentorName.value;
        this.button[this.buttonIndex - 1].setAttribute('onclick', 'startStop(' + button[(buttonIndex - 1)] + ')');
        this.button[this.buttonIndex - 1].setAttribute('class', 'button');
        this.button[this.buttonIndex - 1].setAttribute('id', 'button' + buttonIndex);
        this.button[this.buttonIndex - 1].innerHTML = 'Start';
        li.append(presentorName.value);
        li.append(" " , this.seconds, ":" , this.tens);
        li.append(button[buttonIndex - 1]);
        list.appendChild(li);
        presentorName.value = '';
    }
}

function startStop(element) {
    if (element.innerHTML === 'Stop') {
        element.innerHTML = 'Start';
        Interval = setInterval(startTimer, 10);
    } else {
        element.innerHTML = 'Stop';
        clearInterval(Interval);
    }
}