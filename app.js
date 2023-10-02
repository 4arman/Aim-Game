const gameNameText = document.querySelector('.name-start-block')
const startBtnBlock = document.querySelector('.start-btn')
const startBtn = document.querySelector('.st-button')
const secondBlock = document.querySelector('.second-block')
const timeBtn10 = document.querySelector('.time-select-1')
const timeBtn20 = document.querySelector('.time-select-2')
const timeBtn30 = document.querySelector('.time-select-3')
const timeBtn60 = document.querySelector('.time-select-4')
const aimBlock = document.querySelector('.third-block') 
const time = document.querySelector('.time-num')
const score = document.querySelector('.score-num')
const element = document.querySelector('.element')
const elementBlock = document.querySelector('.element-block')
const fourthBlock = document.querySelector('.fourth-block')
const resBtn = document.querySelector('.restart-button')
const result = document.querySelector('.your-score-num')

startBtn.addEventListener('click', () => {
    gameNameText.style = `
    margin: 0;
    transform: translate(0, -1000px);
    opacity: 0`
    startBtn.style = `
    box-shadow: 0px 10px 4px #222;
    color: #222;
    border-color: #222;
    text-shadow: none;`
    secondBlock.style = `
    transform: translate(0, -280px);
    transition: 2600ms;
    opacity: 1`
})

function randomNumber(min,max) {
    return Math.random() * (max - min) + min
}

let num = randomNumber(300, 700)

function setGameTime(btn, timing) {
    btn.addEventListener('click', () => {
    secondBlock.style = `display: none;`
    aimBlock.style = `
    display: flex;
    justify-content: center;
    align-items: center;`  
    time.textContent = timing

    const interval = setInterval(() => {
        time.textContent -= 1
        if(time.textContent == 0) {
            clearInterval(interval)
            aimBlock.style = `
            display: none;`
            fourthBlock.style = `
            display: block`
            result.textContent = score.textContent
            resBtn.style = 'display: flex'
        }
    },1000)

    elementBlock.style = `
    top: ${num}px;
    bottom: ${num}px;
    left: ${num}px;
    right: ${num}px`
    })

    element.onclick = () => {
        function randomNumber(min,max) {
            return Math.random() * (max - min) + min
        }

        let rannum = randomNumber(10,450)

        function rdNumber(min,max) {
            return Math.random() * (max - min) + min
        }

        let ran = rdNumber(10,450)

        score.textContent++ 

        elementBlock.style = `
        top: ${rannum}px;
        bottom: ${rannum}px;
        left: ${ran}px;
        right: ${ran}px`
        }
}

setGameTime(timeBtn10, 10)
setGameTime(timeBtn20, 20)
setGameTime(timeBtn30, 30)
setGameTime(timeBtn60, 60)

resBtn.addEventListener('click', () => {
    score.textContent = 0
    fourthBlock.style = 'display: none'
    secondBlock.style = `
    transform: translate(0, -280px);
    transition: 2600ms;
    display: flex;
    opacity: 1`
})
