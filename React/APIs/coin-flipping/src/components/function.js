function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let toss = 100;
        let attempts = 0;
        let heads = 0;
        while (attempts < toss && heads < 5) {
        attempts ++;
        let results = tossCoin()
        console.log(results);
        if (results === "heads"){
            heads ++;
        }
        }
        if (heads === 5) {
            resolve(`Heads has been flipped 5 times!`);
        } else if(attempts === toss) {
            reject(`You are out of flips!`);
        } else {
            reject(`an error has occured`);
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
