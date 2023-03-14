// capturar evento de submit do formulario

const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
   const inputPeso = e.target.querySelector('#peso');
   const inputaltura = e.target.querySelector('#altura');

   const peso = Number(inputPeso.value);
   const altura = Number(inputaltura.value);

   if (!peso){
    setResultado('Peso Inválido', false);
    return;
   }

   if (!altura){
    setResultado('Altura Inválida', false);
    return;
   }

   
   const imc = getImc(peso, altura);
   const nivelImc = getNivelImc(imc);

   const msg = `Seu IMC é ${imc} (${nivelImc}).`;
   setResultado(msg, true);

   console.log(imc, nivelImc);
});


function getImc(peso, altura){
    const imc = peso / altura ** 2;
    setResultado(imc, true);
    return imc.toFixed(2);  
}

function getNivelImc (imc){
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obsidade grau 1', 
    'Obsidade grau 2', 'Obsidade grau 3'];
    
    if(imc >= 39.9 ) return nivel[5];
    if(imc >= 34.9 ) return nivel[4];
    if(imc >= 29.9 ) return nivel[3];
    if(imc >= 24.9 ) return nivel[2];
    if(imc >= 18.5 ) return nivel[1];
    if(imc < 18.5)   return nivel[0];

}
    
function criaP(){
const p = document.createElement('p');
p.innerHTML = '';
return p;
}

//p.classList.add('paragrafo');//add uma class ao elemento
//resultado.appendChild(p); // insere um novo elemento

function setResultado(msg, isValid){
const resultado = document.querySelector('#resultado');
resultado.innerHTML= '';//limpa o elemento

const p = criaP();// cria um paragrafo
p.innerHTML = msg;
if(isValid){
    p.classList.add('paragrafo')
}else{
    p.classList.add('bad')
}

p.innerHTML = msg;
resultado.appendChild(p);
}