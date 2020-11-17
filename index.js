// Code your solutions in this file

// function writeCards(namesArr, event) {
//     for (let i = 0; i < namesArr.length; i ++) {
//         console.log (`Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`);
//     }
// }

function writeCards(namesArr, event) {
    let i = 0;
    while (i < namesArr.length) {
        console.log(`Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`);
        i++;
    }
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