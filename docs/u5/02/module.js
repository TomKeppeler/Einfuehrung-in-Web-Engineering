window.onload = function () {

    var seconds = 0o0;
    var tens = 0o0;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
    var button = [];
    var buttonIndex = 0;

    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }


    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }



    function startTimer () {
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

    }







}
function addPerson() {
    const presentorName = document.getElementById('input');
    if (presentorName.value !== '') {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        button[buttonIndex++] = document.createElement('button');
        button[buttonIndex - 1].innerHTML = presentorName.value;
        button[buttonIndex - 1].setAttribute('onclick', 'startStop(button[' + (buttonIndex - 1) + '])');
        button[buttonIndex - 1].setAttribute('class', 'button');
        button[buttonIndex - 1].setAttribute('id', 'button' + buttonIndex);
        li.appendChild(presentorName.value);
        li.appendChild(button[buttonIndex - 1]);
        list.appendChild(li);

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
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