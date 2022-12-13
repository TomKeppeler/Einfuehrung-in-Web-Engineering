class Presenter {

    constructor(name, minute, seconds, button, index) {
        this.name = name;
        this.minuten = minute;
        this.secounds = seconds;
        this.spanTime = document.createElement('span');
        this.spanTime.innerHTML = formatTime(this.secounds, this.minuten);
        this.spanTime.setAttribute("id", "time" + this.index);
        this.button = button;
        this.button.addEventListener("click", () => startStop(button, this.index));
        this.button.innerHTML = "Stop";
        this.index = index;
        this.button.setAttribute("id", "startStopButton" + this.index);
        this.interval = createInterval(this.spanTime, this.index);
    }

    appendAll() {
        let listItemElement = document.createElement('li');
        listItemElement.append(this.name, ": ", this.spanTime, " ", this.button);
        return listItemElement;
    }
}

function formatTime(seconds, minutes) {
    let viewSeconds, viewMinutes;
    if (seconds < 10) {
        viewSeconds =  "0" + seconds;
    } else {
        viewSeconds = "" + seconds;
    }
    if (minutes < 10) {
        viewMinutes = "0" + minutes;
    } else {
        viewMinutes = "" + minutes;
    }
    return viewMinutes + ":" + viewSeconds;
}

let presenter = [];
let presenterIndex = 0;
document.getElementById('input').addEventListener('keyup', (key) => {
        if(key.key === 'Enter') {
            addPerson();
        }
    });
function stopAllButThis(presenterIndex) {
    for (let i = 0; i < presenter.length; i++) {
        if (i !== presenterIndex) {
            clearInterval(presenter[i].interval);
            document.getElementById("startStopButton" + i).innerHTML = "Start";
        }
    }
}

function addPerson() {
    const presenterName = document.getElementById('input');
    if (presenterName.value !== '') {
        presenter[presenterIndex] = new Presenter(presenterName.value, 0, 0, document.createElement('button'), presenterIndex);
        document.getElementById('list')
            .appendChild(presenter[presenterIndex].appendAll());
        presenterIndex++;
        presenterName.value = '';
        stopAllButThis(presenterIndex - 1);
    }
}

function startStop(element, index) {
    if (element.innerHTML === 'Stop') {
        element.innerHTML = 'Start';
        clearInterval(presenter[index].interval);
    } else {
        element.innerHTML = 'Stop';
        presenter[index].interval = createInterval(presenter[index].spanTime, index);
        stopAllButThis(index);
    }
}

function createInterval(timeSpan, index) {
    return setInterval(function () {
        presenter[index].secounds++;
        if (presenter[index].secounds === 60) {
            presenter[index].minuten++;
            presenter[index].secounds = 0;
        }

        timeSpan.innerHTML = formatTime(presenter[index].secounds, presenter[index].minuten);

    }, 1000);
}