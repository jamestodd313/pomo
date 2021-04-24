import {TimerControls} from './Timer'
const timer = new TimerControls()
export const run = ()=> {
    const button = document.getElementById('control-button')

    button.addEventListener('click', ()=>{
        if(timer.isRunning) timer.pause()
        else timer.start()
    })
}