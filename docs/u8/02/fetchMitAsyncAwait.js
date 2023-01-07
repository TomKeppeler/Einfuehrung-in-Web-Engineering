async function start(output) {
    const responseA = await fetch('A.txt');
    const responseB = await fetch('B.txt');

    const textA = await responseA.text();
    const textB = await responseB.text();

    const linesA = textA.split('\n');
    const linesB = textB.split('\n');

    for (let i = 0; i < linesA.length; i++) {
        output.innerHTML += linesA[i] + ' ' + linesB[i] + '<br>';
    }
}
start(document.getElementById('output'));