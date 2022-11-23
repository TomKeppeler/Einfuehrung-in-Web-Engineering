
// Topologische Sortierungs Methode fuer gerichtete Graphen
const topSort = (graph) => {
    const visited = new Set();
    const sorted = [];
    
    const visit = (node) => {
        if (visited.has(node)) return;
        visited.add(node);
        graph[node].forEach(visit);
        sorted.push(node);
    };
    
    Object.keys(graph).forEach(visit);
    return sorted;
    };

//test
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['d'],
    d: [],
    e: ['a', 'd'],
    f: ['e', 'g'],
    g: ['h'],
    h: ['f']
};

const graph2 = {
    schlafen: ['studieren', 'essen', 'prüfen'],
    studieren : ['essen', 'prüfen'],
    essen: ['prüfen', 'studieren'],
};
let sorted = topSort(graph);
let sorted2 = topSort(graph2);
console.log(sorted);
console.log(sorted2);
console.assert(topSort(graph) === sorted);