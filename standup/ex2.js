const m = 277;
let n = 0, x = 0;
for (n = 0; x < m; n++) {
    x = (3 * n) + 1;
    if (x === m) {
        console.log('present in series');
        break;
    }
}
if (x !== m) {
    console.log('not in series');
}
