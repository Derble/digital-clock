// script.js for digital clock

function showTime() {
    const now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let period = "AM"

    //adding 0 to the front of a single digit number
    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (second < 10) {
        second = "0" + second
    }

    // changing from 24 to 12 hour clock
    if (hour == 0) {
        hour = 12
    }
    if (hour == 12) {
        period = "PM"
    }
    if (hour > 12) {
        hour = hour - 12
        period = "PM"
    }

    //clock.innerText = now
    clock.innerText = `${hour}:${minute}:${second} ${period}`
}

const clock = document.querySelector('#clockDisplay')
const body = document.querySelector('body')
const timeColor = document.querySelector('#timeColor')
const backgroundColor = document.querySelector('#backgroundColor')
const fullTheme = document.querySelector('#fullTheme')
const h1 = document.querySelector('h1')

setInterval(showTime, 1000)

const orangeBtn = document.querySelector('#orangeBtn')
orangeBtn.addEventListener('click', function () {
    clock.style.color = "orange"
})
const blueBtn = document.querySelector('#blueBtn')
blueBtn.addEventListener('click', function () {
    clock.style.color = "blue"
})
const greenBtn = document.querySelector('#greenBtn')
greenBtn.addEventListener('click', function () {
    clock.style.color = "#00ff3c"
})

const lightgrayBtn = document.querySelector('#lightgrayBtn')
lightgrayBtn.addEventListener('click', function () {
    clock.style.background = "#dadada"
    body.style.background = "black"
    // h1.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgb(77, 75, 75) 100%)"
    timeColor.style.color = "white"
    backgroundColor.style.color = "white"
    fullTheme.style.color = "white"

})
const blackBtn = document.querySelector('#blackBtn')
blackBtn.addEventListener('click', function () {
    clock.style.background = "black"
    body.style.background = "#dadada"
    // h1.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgb(77, 75, 75) 100%)"
    timeColor.style.color = "black"
    backgroundColor.style.color = "black"
    fullTheme.style.color = "black"
})
const whiteBtn = document.querySelector('#whiteBtn')
whiteBtn.addEventListener('click', function () {
    clock.style.background = "white"
    body.style.background = "black"
    // h1.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgb(77, 75, 75) 100%)"
    timeColor.style.color = "white"
    backgroundColor.style.color = "white"
    fullTheme.style.color = "white"
})
const mountainBtn = document.querySelector('#mountainBtn')
mountainBtn.addEventListener('click', function () {
    //body.style.background = "url(img/jerry-zhang-ePpaQC2c1xA-unsplash.jpg)"
    body.style.background = "url(img/daniel-leone-g30P1zcOzXo-unsplash.jpg)"
    body.style.backgroundSize = "100%"
    //h1.style.display = "none"
    // h1.style.background = "none"
    clock.style.background = "none"
    clock.style.color = "white"
    clock.style.border = "none"
    timeColor.style.color = "white"
    backgroundColor.style.color = "white"
    fullTheme.style.color = "white"
})
