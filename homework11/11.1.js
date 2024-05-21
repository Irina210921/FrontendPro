let arr = Array(11);
for (let i = 1; i < 11; i++) {
    arr[i] = [...Array(11)].map((_, j) => i * j);
}

console.log(arr)


let s = '';
for (let i = 1; i < 11; i++) {
    s += arr[i].slice(1).join(' ') + '\n';
}

console.log(s);
console.log(arr[6][5]);