let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourBox = document.querySelector('.hours'),
    minuteBox = document.querySelector('.minutes');
    
  
// new Date() - это глобальный встроенный объект (class) - который дает информацию о дате и времени
    
function clock() {
    let time = new Date()
    let seconds = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30
    
    secondArrow.style = `transform: rotate(${seconds}deg)`
    minuteArrow.style = `transform: rotate(${minutes}deg)`
    hourArrow.style = `transform: rotate(${hours}deg)`
    
    hourBox.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minuteBox.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => {
        clock()
    }, 1000);
}

clock()



// Рекурсия это когда функция вызывает саму себя
// setTimeout() - выполяет какие либо действие с указанной задержкой


let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((el,i) => {
    el.addEventListener('click', () => {
        removeActive()
        el.classList.add('active')
        tabs[i].classList.add('active')
    })
})


function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

let btn = document.querySelector('.stopwatch__btn'),
    sw_seconds = document.querySelector('.stopwatch__seconds'),
    sw_minutes = document.querySelector('.stopwatch__minutes'),
    sw_hours = document.querySelector('.stopwatch__hours'),
    span = document.querySelector('.tabsLink__span')



btn.addEventListener('click',()=>{
    if(btn.innerHTML=='START'){
        btn.innerHTML='STOP'
        span.classList.add('active');
        function start() {
            if(btn.innerHTML=='STOP'){
                sw_seconds.innerHTML++;
                if(sw_seconds.innerHTML==60){
                    sw_seconds.innerHTML=0;
                    sw_minutes.innerHTML++;
                }
                if(sw_minutes.innerHTML==60){
                    sw_minutes.innerHTML=0;
                    sw_hours.innerHTML++;
                }
                setTimeout(()=>{
                    start()
                },1000)
            }else{}
        }
        start()
    }else if(btn.innerHTML=='STOP'){
        btn.innerHTML='CLEAR'
        span.classList.add('active_clear');
        span.classList.remove('active');
        
    }else{
        btn.innerHTML='START'
        sw_seconds.innerHTML = 0
        sw_minutes.innerHTML = 0
        sw_hours.innerHTML = 0
        span.classList.remove('active_clear');
    }
})
