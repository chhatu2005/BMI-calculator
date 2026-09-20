const updateClock = () => {
    const now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    //12 ke bad phir se 1 hone ke liye
    if (hours == 0) {
        hours = 12
    }
    else if (hours > 12) {
        hours = hours - 12
    }

    // 10 se pahle 0 add karne ke liye
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }


    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds
}

updateClock()
setInterval(updateClock, 1000)