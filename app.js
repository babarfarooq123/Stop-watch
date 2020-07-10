var min = 0;
var sec = 0;
var msec = 0;
var myVar = 0;

function setI(){
    msec+=1
    document.getElementById('d3').innerHTML = msec;
    if(msec == 100){
        msec = 0
        sec+=1
        document.getElementById('d2').innerHTML = sec
        if(sec == 60){
            sec=0
            min+=1
            document.getElementById('d2').innerHTML = min
        }
    }
}


function start(){
    document.querySelector('#st').disabled = true
    myVar = setInterval(setI, 10);
}

function pause(){
    document.querySelector('#st').disabled = false
    clearInterval(myVar)
}

function restart(){
    msec = 0
    sec = 0
    min = 0
    document.getElementById("d1").innerHTML = "00"
    document.getElementById("d2").innerHTML = "00"
    document.getElementById("d3").innerHTML = "00"
}