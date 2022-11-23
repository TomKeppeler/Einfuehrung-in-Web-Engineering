const fibonacci = (n, memo = []) => {
    if(n in memo) return memo[n];
    if(n < 2) return 1;
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

ret = "";
i = 0;
while(i <= 200) {
    f = fibonacci(i);
    i++;
    ret += i + ": " + f + "\n";
}

console.log(ret);