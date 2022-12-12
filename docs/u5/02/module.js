class Presenter {

    constructor(name, minute, seconds, button, index) {
        this.name = name;
        this.minuten = minute;
        this.secounds = seconds;
        this.spanTime = document.createElement('span');
        this.spanTime.innerHTML = formatTime(this.secounds, this.minuten);
        this.spanTime.setAttribute("id", "time" + this.index);
        this.button = button;
        this.button.addEventListener("click", () => startStop(button));
        this.button.innerHTML = "Start";
        this.index = index;
        this.button.setAttribute("id", "startStopButton" + this.index);
        this.startTime = new Date();
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


function addPerson() {
    const presenterName = document.getElementById('input');
    if (presenterName.value !== '') {


        presenter[presenterIndex] = new Presenter(presenterName.value, 0, 0, document.createElement('button'), presenterIndex);


        document.getElementById('list')
            .appendChild(presenter[presenterIndex].appendAll());
        presenterIndex++;
        presenterName.value = '';

    }
}

function startStop(element) {
    if (element.innerHTML === 'Stop') {
        element.innerHTML = 'Start';
    } else {
        element.innerHTML = 'Stop';
    }
}

function createInterval(timeSpan, index) {

    return setInterval(function () {
        let currentTime = new Date();
        let timeDifference = currentTime - presenter[index].startTime;
        let seconds = Math.floor((timeDifference / 1000) % 60);
        let minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        timeSpan.innerHTML = formatTime(seconds, minutes);

    }, 1000);
}