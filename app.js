let hour = 0;
let minute = 0;
let second = 0;
let milliseconds = 0;
let timer = true;

const start = () => {
    if (timer == true){
        timer = false;
        click();
    }
}

const stop = () => {
    if (timer == false){
        timer = true;
    }
}

const click = () => {
    if (timer == false){
        milliseconds = parseInt(milliseconds)
        second = parseInt(second)
        minute = parseInt(minute)
        hour = parseInt(hour)
        milliseconds = milliseconds + 1
        if (milliseconds == 100){
            second = second + 1;
            milliseconds = 0;
            if(second == 60){
                minute = minute + 1 ;
                second = 0;
                if(minute == 60){
                    hour = hour + 1 ;
                    minute = 0
                }
            }   
        }

        milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds
        second = second < 10 ? "0" + second : second
        minute = minute < 10 ? "0" + minute : minute
        hour = hour < 10 ? "0" + hour : hour
        setTimeout(click, 10)
        document.querySelector(".millisec").innerHTML = milliseconds
        document.querySelector(".sec").innerHTML = second 
        document.querySelector(".min").innerHTML = minute 
        document.querySelector(".hr").innerHTML = hour
    }
}


const restart = () => {
    hour = 00;
    second = 00;
    minute = 00;
    milliseconds = 00;

    document.querySelector(".millisec").innerHTML = 00
    document.querySelector(".sec").innerHTML = 00 
    document.querySelector(".min").innerHTML = 00 
    document.querySelector(".hr").innerHTML = 00
}