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


    iniciar() {
        const intervalId = setInterval(() => {
            if(this.seconds == 0 ){
                this.minutes--
                this.seconds = 59
            }
            if(this.minutes == 0){
                this.hour--
            }
            this.seconds--
            tempo.innerHTML = `${this.hour}:${this.minutes}:${this.seconds}`;
            console.log(`Time remaining: ${this.time}s`);

            if (this.hour == 0 && this.minutes == 0 && this.seconds == 0) {
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


