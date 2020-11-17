// Code your solutions in this file

// function writeCards(namesArr, event) {
//     for (let i = 0; i < namesArr.length; i ++) {
//         console.log (`Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`);
//     }
// }

function writeCards(namesArr, event) {
    let i = 0;
    let newArr = [];
    while (i < namesArr.length) {
        console.log(`Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`);
        newArr.push(`Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`);
        i++;
    }
    return newArr;
}

// writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' )

function countDown(num) {
    let i = 0;
    while (i < (num + 1)) {
        console.log(num - i);
        i ++;
    }
}

// countDown(20)