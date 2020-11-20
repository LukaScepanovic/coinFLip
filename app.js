const game = () => {
    let eScore = 0;
    let bScore = 0;

const buttonB = document.querySelector(".btn-btc");
const buttonE = document.querySelector(".btn-eur");
const coin = document.querySelector(".coin");



buttonB.addEventListener("click", spin);
buttonE.addEventListener("click", spin);
//separate btn for btc and for eur that do the same thing (copy the code from line above)

function spin () {
    const random = Math.random();

            if(random < 0.5) {
                coin.setAttribute("class", "coin animate-heads");
                setTimeout(() => {
                eScore++;
                updateScore();
            }, 3000);
            } else {
                coin.setAttribute("class", "coin animate-tails");
                setTimeout(() => {
                bScore = bScore + 10000;
                updateScore();
            }, 3000);
        }
};


    const updateScore = () => {
        const eurScore = document.querySelector(".score1");
        const btcScore = document.querySelector(".score2");
        eurScore.textContent = eScore;
        btcScore.textContent = bScore;
    };
}

document.querySelector(".btn-score").addEventListener("click", init); //like this the function only works once we click the btn
function init() {
    location.reload();
};

game();


