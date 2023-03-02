// const img = document.getElementById('img');
// const buttons = document.getElementById('buttons');

// const trafficLight = ( event ) =>{
//    if(event.target.id === 'red'){
//     turnOnRed();
//    }else if (event.target.id === 'yellow'){
//     turnOnYellow();
//    }else{
//     turnOnGreen();
//    }
// };

// const turnOnRed = () =>{
//     img.src = './img/vermelho.png'
// }

// const turnOnYellow = () =>{
//     img.src = './img/amarelo.png'
// }

// const turnOnGreen = () =>{
//     img.src = './img/verde.png'
// }

// buttons.addEventListener('click', trafficLight)

const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;
// function arrow com event ('click') trazendo o objeto e fazendo o event pegar o id
 const trafficLight = ( event ) =>{
    stopAutomatic();    
    turnOn[event.target.id]();
    
 }


 const nextIndex = () =>{ // outra maneira é colorIndex = colorIndex <2 ? ++colorIndex :0 quando é função ternaria não precisaria de chaves {};
    if(colorIndex === 0){
        colorIndex++;
    }else if(colorIndex === 1){
        colorIndex++
    }else{
        colorIndex = 0
    }
 }

 const changeColor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
 }

const stopAutomatic = () =>{
    clearInterval(intervalId) ;
}

// objeto colocando as 3 imagens com variaveis e arrow 
 const turnOn = {
    red : () => img.src = './img/vermelho.png',
    yellow : () => img.src = './img/amarelo.png',
    green : () => img.src = './img/verde.png',
    automatic : () => intervalId = setInterval(changeColor, 1000), // setInterval vai fazer que a cor mude a cada 1 segundo changeColor é a função e ela recebe 1000 miliSegundos.
    
 }

 buttons.addEventListener('click', trafficLight)