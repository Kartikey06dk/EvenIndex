function evenIndices(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    return result;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;

    if (lineNumber == 1) {
        logic("s");
        readline.close();
    }
}

function logic(input) {


    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

    console.log(evenIndices(Arr).join(" "));
}



