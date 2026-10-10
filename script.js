function secondHighest(arr) {
let unique = [...new Set(arr)];


if (unique.length < 2) {
    return -Infinity;
}

unique.sort((a, b) => b - a);

return unique[1];


}
