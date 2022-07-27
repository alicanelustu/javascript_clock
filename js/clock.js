let name = prompt("Lutfen Adinizi Giriniz: ")
    let tagName = document.querySelector("#myName")
        tagName.innerHTML = `${tagName.innerHTML} ${name}`

function showTime () {
    let clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();
    let day = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    
    let clocks = document.querySelector("#myClock")
        clocks.innerHTML = hour + ":" + minute + ":" + second + days[day.getDay()]
} 



let clockss = setTimeout(showTime(),1000)


