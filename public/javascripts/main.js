class Game {
    constructor(playersArray) {
        this.playersArray = playersArray;
    }
    initiateGame() {
        for(let i = 0; i < this.playersArray.length-1; i++) {
            var p1 = this.playersArray[i];
            var p2 = this.playersArray[i+1];
            console.log(`${p1} --> ${p2}`);
        }
        console.log(`${p2} --> ${this.playersArray[0]}`);
    }
    killPlayer(killed) {
        let killedIndex = this.playersArray.indexOf(killed);
        console.log(`${killed} was killed by ${(this.playersArray[killedIndex-1] > 0 ? this.playersArray[killedIndex-1] : this.playersArray[this.playersArray.length-1])}`)
        this.playersArray.splice(killedIndex, 1);
        console.log('---');
        this.initiateGame(this.playersArray);
    }
}
const playersArray = ['bob', 'bill', 'sally', 'mary', 'jack', 'dan', 'josh', 'zach', 'james'];
const round1 = new Game(playersArray);
round1.initiateGame();
round1.killPlayer('bob');