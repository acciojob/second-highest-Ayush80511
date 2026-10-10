function secondHighest(arr) {
let highest = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > highest) {
        second = highest;
        highest = num;
    } else if (num < highest && num > second) {
        second = num;
    }
}

return second;


}
