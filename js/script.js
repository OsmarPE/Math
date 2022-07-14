// area
const number = document.querySelector('#cubeCalt')
//p of answer
const areaAnswer = document.querySelector('.areaAnswer');
const perimeterAnswer = document.querySelector('.perimeterAnswer')
//Buttons
const botonCalt = document.querySelector('.cubeBottomCalt')
const remove = document.querySelector('.cubeBottomRemove');

// area
const textCircle = document.querySelector('#circleCal');
// p of answer
const perimeterAnswerCircle = document.querySelector('.perimeter_Answer_Circle');
const areaAnswerCircle = document.querySelector('.area_Answer_Circle');
// buttons
const circleBottomCalt = document.querySelector('.circleBottomCalt')
const circleBottomRemove = document.querySelector('.circleBottomRemove')

// TEXTAREAS
const trianguleLado = document.querySelector('#trianguleLado');
const trianguleBase = document.querySelector('#trianguleBase');
const trianguleAlto = document.querySelector('#trianguleAlto');
// p of answer
const perTrianguleAnswer = document.querySelector('.perimeter_Answer_Triangule');
const areaTrianguleAnswer = document.querySelector('.area_Answer_Triangule');
// buttons
const trianguleBottomCalt = document.querySelector('.trianguleBottomCalt');
const trianguleBottomRemove = document.querySelector('.trianguleBottomRemove');

//TEXTAREA
const rentanguleW = document.querySelector('#rentanguleW');
const rentanguleH = document.querySelector('#rentanguleH');

//p of answer
const perAnswerRectangule = document.querySelector('.perimeter_Answer_Rectangule') 
const areaAnswerRectangule = document.querySelector('.area_Answer_Rectangule') 

//BUTTONS
const rectanguleBottomCalt = document.querySelector('.rectanguleBottomCalt');
const rectanguleBottomRemove = document.querySelector('.rectanguleBottomRemove');

//BUTTONS
botonCalt.addEventListener('click', (e) =>{
    e.preventDefault();
    resultado(areaCube(number.value),areaAnswer,perimeterAnswer,'area')
    resultado(perimeterCube(number.value),areaAnswer,perimeterAnswer,'perimeter')
})

circleBottomCalt.addEventListener('click', (e) =>{
    e.preventDefault();
    resultado(ciclePerimeter(textCircle.value),areaAnswerCircle,perimeterAnswerCircle,'perimeter');
    resultado(circleArea(textCircle.value),areaAnswerCircle,perimeterAnswer,'area');
});

trianguleBottomCalt.addEventListener('click', (e) => {
    e.preventDefault();
    resultado(perimeterTriangule(trianguleLado.value),areaTrianguleAnswer,perTrianguleAnswer,'perimeter')
    resultado(areaTriangule(trianguleBase.value,trianguleAlto.value),areaTrianguleAnswer,perTrianguleAnswer,'area')
});

rectanguleBottomCalt.addEventListener('click', (e) => {
    e.preventDefault();
     resultado(perimeterRectangule(rentanguleW.value,rentanguleH.value),areaAnswerRectangule,perAnswerRectangule,'perimeter')
     resultado(areaRectangule(rentanguleW.value,rentanguleH.value),areaAnswerRectangule,perAnswerRectangule,'area')
})

//CLEANS
remove.addEventListener('click',(e) =>{
    e.preventDefault();
    removes(areaAnswer,perimeterAnswer,number)
})
circleBottomRemove.addEventListener('click', (e) =>{
    e.preventDefault();
    removes(areaAnswerCircle,perimeterAnswerCircle,textCircle)
})
trianguleBottomRemove.addEventListener('click', (e) =>{
    e.preventDefault();
    areaTrianguleAnswer.textContent = '0'
    perTrianguleAnswer.textContent = '0'
    trianguleAlto.value = ''
    trianguleBase.value = ''
    trianguleLado.value = ''
})
rectanguleBottomRemove.addEventListener('click', (e) =>{
    e.preventDefault();
    removes(areaAnswerRectangule, perAnswerRectangule,rentanguleH,rentanguleW);
});

// CUBE FUNCTIONS 
 function areaCube(number) {
 return number * number 
}
function perimeterCube(number) {
    return number * 4
}

function resultado(resultado, area, perimeter, tipo = 'unidentified') {
    (tipo === 'area') ? area.textContent = resultado : perimeter.textContent = resultado; 

}

function removes(area, perimeter, number, number2 = undefined) {
        area.textContent = '0'
        perimeter.textContent = '0';
        number.value = '';
        if (number2 !== undefined) {
            number2.value = '';
        }
   
}
// CIRCLE FUNCTIONS
function ciclePerimeter(radio) {
    return (2 * Math.PI * radio).toFixed(2);
  }
function circleArea(radio) {
    return (Math.PI * Math.pow(radio,2)).toFixed(2); // limits the decimals tofixed
  }

// TRIANGULE FUNCTIONS

  function areaTriangule(base,height) {
    return (base * height) / 2;
  }
  function perimeterTriangule(lado) {
    return lado * 3;
  }

  //RECTANGULE FUNCTIONS

  function areaRectangule(width, height) {
    return (2 * width) + (2 * height);
  }
  function perimeterRectangule(width, height) {
    return width * height;
  }