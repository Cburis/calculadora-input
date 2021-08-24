'use strict'
class Calculadora{
constructor(){
    this.n1 = document.querySelector('#n1');
    this.n2 = document.querySelector('#n2');
    this.elevado = document.querySelector('#elevado');
    this.btnSoma = document.querySelector("[data-btnSoma]")
    this.btnSub = document.querySelector("[data-btnSub]")
    this.btnDiv = document.querySelector("[data-btnDiv]")
    this.btnMult = document.querySelector("[data-btnMult]")
    this.btnRai = document.querySelector("[data-btnRai]")
    this.btnPot = document.querySelector("[data-btnPot]")
    this.resultado = document.querySelector('span');
    this.teste = document.querySelectorAll('[data-teste]')

    console.log(this.teste)

    this.criarListeners()
    
}

criarListeners = () => {

    this.btnSoma.addEventListener('click', () => {
        this.resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);
    })
    this.btnSub.addEventListener('click', () => {
       this.resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value);
     
    })
    this.btnMult.addEventListener('click', () => {
        this.resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
     
    })
    this.btnDiv.addEventListener('click', () => {
        this.resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value);
     
    })
    this.btnRai.addEventListener('click', () => {
        this.resultado.innerHTML = Math.sqrt(parseFloat(n1.value));
     
    })
    this.btnPot.addEventListener('click', () => {
        this.resultado.innerHTML = Math.pow(parseFloat(n1.value), parseFloat(elevado.value));
     
    })
}

}

new Calculadora()



