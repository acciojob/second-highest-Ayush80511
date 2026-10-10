function secondHighest(arr) {
if (!arr || arr.length < 2) {
return -Infinity;
}


let unique = [...new Set(arr)];

if (unique.length < 2) {
    return -Infinity;
}

unique.sort((a, b) => b - a);



}
