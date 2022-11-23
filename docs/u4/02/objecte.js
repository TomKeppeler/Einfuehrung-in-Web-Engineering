var Person = (name, firstname, age, auto) => {
    return {
        name: name,
        firstname: firstname,
        age: age,
        auto : auto,
        setAuto(auto) {
            this.auto = auto;
        },
        toString: function toString() {
            return "Name: " + this.name + ", Vorname: " + this.firstname + ", Alter: " + this.age;
        }
    };
};

var Auto = (marke, modell) => {
    return {
        marke: marke,
        modell: modell,
        toString: function toString() {
            return "Marke: " + this.marke + ", Modell: " + this.modell + ", Person: " + this.person;
        }
    };
};

function conflict(person) {
    for (let i = 0; i < person.length; i++) {
        for (let j = 0; j < person.length; j++) {
            if (person[i].auto === person[j].auto) {
                return true;
            }
        }
    }
    return false;
}