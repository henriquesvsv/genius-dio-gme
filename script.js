let order = [];
let clickedorder = [];
let scored = 0 ; 


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    console.log(colorOrder);//apagar
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

let lightColor = (element, time) =>{

    time=time+500;
    setTimeout(() =>{
        element.classList.add('select');

    }, time-250);
    setTimeout(() =>{
        element.classList.remove('select');
    }
    )
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        console.log(order[0]);
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    
}
    if(clickedOrder.lenght == order.lenght){
        alert(`Pontuação: ${scored}\n Você acertou iniciando proximo nivel`);
        nextLevel();
    }
}

let click =(color) =>{

    clickedOrder[clickedOrder.lenght] = color;
    createColorElement(color).classList.add('select');

    setTimeout(() =>{
        createColorElement(color).classList.remove('select');
        checkOrder();

    }, 200)
    
}

let createColorElement = (color) => {
    if(color==0){
        return green;
    } else if(color==1){
        return red;
    } else if(color==2){
        return yellow;
    } else if(color==3){
    return blue;
    }
}

let nextLevel = () => {

    scored++;
    shuffleOrder();

}

let gameOver = () => {

    alert(`Pontuação: ${scored}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedorder = [];

    playGame(); 
}

let playGame = () => {

    alert("bem vindo ao genesis!\n iniciando um novo jogo");
    scored = 0;
    nextLevel();
}

green.onclick = () => click(1);
red.onclick = () => click(0);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();

