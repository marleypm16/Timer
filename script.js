const btnIniciar = document.querySelector(".iniciar")
const tempo = document.querySelector('.timer')
const horaInput = document.querySelector('.hour')
const minutoInput = document.querySelector('.minute')
const segundosInput = document.querySelector('.second')
const horaSpan = document.querySelector('.span-hora')
const minutoSpan = document.querySelector('.span-minutos')
const segundosSpan = document.querySelector('.span-segundos')
const btnStop = document.querySelector(".parar")
const btnReiniciar = document.querySelector(".reiniciar")
const btnContinuar = document.querySelector(".continuar")

class Timer{
    constructor(){
        this.hour = 0
        this.minutes = 0
        this.seconds = 0
        this.intervalId = null
    }

    formatarNumeros(time){
        return String(time).padStart(2, '0')
    }

    verificarSeNumero(valor){
        return isNaN(valor)
    }

    limparInputs(){
        horaInput.value = ''
        minutoInput.value = ''
        segundosInput.value = ''
    }
    countdown(hour,minutes,seconds){
        this.intervalId = setInterval(() => {
            if(minutes == 0 && seconds == 0 && hour > 0){
                hour--
                minutes = 60
            }
            // if(this.minutes == 0 && this.seconds == 0){
            //     this.minutes = 60
            // }
            if(seconds == 0 && minutes > 0){
                minutes--
                seconds = 60
            }
            seconds--
            // tempo.innerHTML = `${this.formatarNumeros(this.hour)}:${this.formatarNumeros(this.minutes)}:${this.formatarNumeros(this.seconds)}`;
            horaSpan.innerHTML = `${this.formatarNumeros(hour)}`
            minutoSpan.innerHTML = `${this.formatarNumeros(minutes)}`
            segundosSpan.innerHTML = `${this.formatarNumeros(seconds)}`
            if (hour == 0 && minutes == 0 && seconds == 0) {
                clearInterval(this.intervalId)
                return alert("fim")
             }
        }, 1000);
    }

    iniciar() {
        this.hour = parseInt(horaInput.value,10)
        this.minutes = parseInt(minutoInput.value,10)
        this.seconds = parseInt(segundosInput.value,10)
        if(this.verificarSeNumero(this.hour)){
            this.hour = 0
        }
        if(this.verificarSeNumero(this.minutes)){
            this.minutes = 0
        }
        if(this.verificarSeNumero(this.seconds)){
            this.seconds = 0
        }
        if (this.hour == 0 && this.minutes == 0 && this.seconds == 0) {
           return alert("insira um tempo")
        }
        this.countdown(this.hour,this.minutes,this.seconds)
        this.limparInputs()
       
    }
    parar(){
        clearInterval(this.intervalId)
        console.log('parou')
    }
    continue(){
        const hour = parseInt(horaSpan.innerHTML,10)
        const minutes = parseInt(minutoSpan.innerHTML,10)
        const seconds = parseInt(segundosSpan.innerHTML,10)
        console.log(hour)
        console.log(minutes)
        console.log(seconds)
        this.countdown(hour,minutes,seconds)

    }
    reiniciar() {
        clearInterval(this.intervalId);
        this.hour = 0;
        this.minutes = 0;
        this.seconds = 0;
        horaSpan.innerHTML = `${this.formatarNumeros(this.hour)}`
        minutoSpan.innerHTML = `${this.formatarNumeros(this.minutes)}`
        segundosSpan.innerHTML = `${this.formatarNumeros(this.seconds)}`
    }
}


const timer = new Timer()

btnIniciar.addEventListener("click",()=>{
    timer.iniciar()
})

btnStop.addEventListener("click",()=>{
    timer.parar()
})

btnReiniciar.addEventListener('click',()=>{
    timer.reiniciar()
})

btnContinuar.addEventListener("click",()=>{
    timer.continue()
})



