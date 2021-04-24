export class TimerControls {
    constructor(){
        // time stuff
        this.workDuration = 1500000 // default is 25 minutes
        this.timeRemaining = this.workDuration // default is the same as workDuration
        this.breakDuration = 300000 // default is 5 minutes

        // running status stuff
        this.ticker = false         // use this to hold the interval so it can be cleared
        this.isRunning = false      // use this is determine if timer is running
        this.isPaused = false       // If isRunning = false isPaused will tell you whether is timer !isRunning because it hasn't been started or because it is paused.
    }

    // timer controls
    start(){
        this.ticker = setInterval(()=>{
            this.timeRemaining -= 1
            console.log(this.timeRemaining)
        }, 1000)
        this.isRunning = true
    }
    pause(){
        if(this.ticker){
            clearInterval(this.ticker)
            this.isRunning = false
            console.log('paused')
        }
    }

}