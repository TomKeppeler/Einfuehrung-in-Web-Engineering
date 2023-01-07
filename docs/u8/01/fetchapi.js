
const file1 = fetch('A.txt');
const file2 = fetch('B.txt');
const output = document.getElementById('output');
Promise.all([file1, file2])
    .then(([res1, res2]) => {
        return Promise.all([res1.text(), res2.text()]);
    })
    .then(([textA, textB]) => {
        const linesA = textA.split('\n');
        const linesB = textB.split('\n');

        linesA.forEach((lineA, index) => {
            const lineB = linesB[index];
            output.innerHTML += lineA + ' ' + lineB + '<br>';
        });
    })
    .catch(error => {
        console.error(error);
    });
