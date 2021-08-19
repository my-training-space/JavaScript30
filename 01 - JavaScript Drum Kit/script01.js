function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
}

function removeTransition(e){
    // console.log(e)
    if(e.propertyName != 'transform') return        //waiting for the longest transition
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach( key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
