const identity_function = x => x => x;

console.log(identity_function(3)); // 3

const addf = x => y => x + y;

console.log(addf(3)(4)); // 7

const add = (x, y) => x + y;

console.log(add(3, 4)); // 7

const applyf = f => x => y => f(x, y);

console.log(applyf(add)(3)(4)); // 7

const curry = (f, x) => y => f(x, y);

const add3 = curry(add, 3);
console.log(add3(4)); // 7

const inc1 = (x) => applyf(add(x, 1));

console.log(inc1(5)); // 6

const inc2 = curry(add, 1);

console.log(inc2(5)); // 6

const inc3 = (x) => addf(x)(1);

console.log(inc3(5)); // 6

const methodize = f => x => y => f(x, y);
Number.prototype.add = methodize(add);
console.log((3).add(4));

const demethodize = f => (x, y) => f.call(x, y);

console.log(demethodize(Number.prototype.add)(5, 6)); // 11

const mul = (x, y) => x * y;
const twice = f => x => f(x, x);

var double = twice(add);
console.log(double(11)); // 22
var square = twice(mul);
console.log(square(11)); // 121

const composeu = (f, g) => x => g(f(x));

console.log(composeu(double, square)(3)); // 36

const composeb = (f, g) => (x, y, z) => g(f(x, y), z);

console.log(composeb(add, mul)(2, 3, 5)); // 25

const once = f => {
    let done = false;
    return (...args) => {
        if (!done) {
            done = true;
            return f(...args);
        }
    };
}

const add_once = once(add);
console.log(add_once(3, 4)); // 7
console.log(add_once(3, 4)); // undefined

const counterf = (x) => {
    let count = x;
    return {
        inc: () => ++count,
        dec: () => --count
    };
}

const counter = counterf(10);
console.log(counter.inc()); // 11
console.log(counter.dec()); // 10

const revocable = f => {
    let revoked = false;
    return {
        invoke: (...args) => {
            if (!revoked) {
                return f(...args);
            }
        },
        revoke: () => revoked = true
    };
}
const temp = revocable(alert);
temp.invoke(7); // alert(7)
temp.revoke();
temp.invoke(8); // fehlerabbruch

function vector() {
    const memory = [];

    this.get = function(i) {
        return memory[i];
    }
    this.store = function(i, value) {
        memory[i] = value;
    }
    this.append = function(value) {
        memory.push(value);
    }
}

const myVector = vector();
myVector.append(7);
myVector.store(1, 8);
console.log(myVector.get(0)); // 7
console.log(myVector.get(1)); // 8
