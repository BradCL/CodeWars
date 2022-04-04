//Fake Binary
const fakeBin = x => x.split("").map(num => Number(num) < 5 ? 0 : 1).join("")
