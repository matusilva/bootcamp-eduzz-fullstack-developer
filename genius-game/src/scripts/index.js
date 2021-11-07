let order = [];
let clickedOrder = [];
let score = 0;

// 0 => green
// 1 => red
// 2 => yellow
// 3 => blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

// cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    }
    else if (color == 1) {
        return red;
    }
    else if (color == 2) {
        return yellow;
    }
    else if (color == 3){
        return blue;
    }
}

// proxima nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// perdeu o jogo
let gameOver = () => {
    alert(`Pontuação: ${score}\nGame Over! :(\nClique em Ok para tentar novamente!`);
    order = [];
    clickedOrder = [];

    playGame();
}

// iniciar Jogo
let playGame = () => {
    alert(`Bem Vindo ao Gênesis! Iniciando novo jogo!`);
    score = 0;

    nextLevel();
}

// eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();