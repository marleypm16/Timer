const btnIniciar = document.querySelector(".iniciar")
const tempo = document.querySelector('.timer')
const hora = document.querySelector('.hour')
const minuto = document.querySelector('.minute')
const segundos = document.querySelector('.second')
const btnStop = document.querySelector(".parar")
const btnReiniciar = document.querySelector(".reiniciar")

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

    iniciar() {
        this.hour = parseInt(hora.value,10)
        this.minutes = parseInt(minuto.value,10)
        this.seconds = parseInt(segundos.value,10)
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
        this.intervalId = setInterval(() => {
         

            if(this.minutes == 0 && this.seconds == 0 && this.hour > 0){
                this.hour--
                this.minutes = 60
            }
            // if(this.minutes == 0 && this.seconds == 0){
            //     this.minutes = 60
            // }
            if(this.seconds == 0 && this.minutes > 0){
                this.minutes--
                this.seconds = 60
            }
            this.seconds--
            tempo.innerHTML = `${this.formatarNumeros(this.hour)}:${this.formatarNumeros(this.minutes)}:${this.formatarNumeros(this.seconds)}`;
            console.log(`Time remaining: ${this.time}s`);
            if (this.hour == 0 && this.minutes == 0 && this.seconds == 0) {
                clearInterval(intervalId)
                return alert("fim")
             }
        }, 1000);
    }
    parar(){
        clearInterval(this.intervalId)
        console.log('parou')
    }
    reiniciar() {
        clearInterval(this.intervalId);
        this.hour = 0;
        this.minutes = 0;
        this.seconds = 0;
        tempo.innerHTML = `${this.formatarNumeros(this.hour)}:${this.formatarNumeros(this.minutes)}:${this.formatarNumeros(this.seconds)}`;
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



