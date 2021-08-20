function setDate(){
    const secondHand = document.querySelector('.second-hand')
    const minHand = document.querySelector('.min-hand')
    const hourHand = document.querySelector('.hour-hand')



    const now = new Date()
    const seconds = now.getSeconds()
    const secondsDegrees = seconds * 6 + 90 // this means seconds/60*360
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes()
    const minutesDegrees = minutes * 6 + 90 // this means seconds/60*360
    minHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours()
    const hoursDegrees = hours * 6 + 90 // this means seconds/60*360
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`



    console.log(seconds)
}

setInterval(setDate, 1000)