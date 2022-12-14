window.onload = function () {
    document.getElementById("auf1").innerHTML = identity(5);
    document.getElementById("auf2").innerHTML = identity_function(5);
    document.getElementById("auf31").innerHTML = add(5, 6);
    document.getElementById("auf32").innerHTML = mul(5, 6);
    document.getElementById("auf4").innerHTML = addf(5)(6);
    document.getElementById("auf5").innerHTML = applyf(mul)(5)(6);
}

function identity(a) {
    return a;
}

function identity_function(a) {
    return identity(a);
}

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function addf(x) {
    return function (y) {
        return x + y;
    };
}

function applyf(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}