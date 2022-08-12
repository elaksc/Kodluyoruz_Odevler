function showTime(){
   
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let today = new Date();
    let todayName = today.getDay()
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let currentTime = document.querySelector("#myClock")
    currentTime.innerHTML = `${time} ${days[todayName]}`
    setTimeout(showTime, 1)
    }
    showTime()
    let nameFirst = document.querySelector("#myName") 
    let userName = prompt("Type your name")
    nameFirst.innerHTML = `${userName}`