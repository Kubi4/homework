let mapArray = new Map();
mapArray.set(1, " hello darkness   my old   friend ");
mapArray.set(2, " i\'ve come to   talk  with   you again    ");
for (let strings of mapArray.values()) {
    strings.replace(/\s+/g, ' ').trim();
}
console.log(mapArray);