const iniciar = document.querySelector(".iniciar")
const tempo = document.querySelector('.timer')
const hora = document.querySelector('.hour')
const minuto = document.querySelector('.minute')
const segundos = document.querySelector('.second')

class Timer{
    constructor(hour,minutes,seconds){
        this.hour = hour
        this.minutes = minutes
        this.seconds = seconds
    }

    formatarNumeros(time){
        return String(time).padStart(2, '0')
    }

    iniciar() {
        const intervalId = setInterval(() => {

            if(this.seconds == '00' ){
                this.minutes--
                this.seconds = 59
            }
            if(this.minutes == '00'){
                this.hour--
            }
            this.seconds--
            tempo.innerHTML = `${this.formatarNumeros(this.hour)}:${this.formatarNumeros(this.minutes)}:${this.formatarNumeros(this.seconds)}`;
            console.log(`Time remaining: ${this.time}s`);

            if (this.hour == '00' && this.minutes == '00' && this.seconds == '00') {
                clearInterval(intervalId);
                console.log("Timer expired!");
            }
        }, 1000);
    }
}



iniciar.addEventListener("click",()=>{
    const timer = new Timer(hora.value,minuto.value,segundos.value)
    timer.iniciar()
})


