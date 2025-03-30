let clickCount = 0; 

function handleClick() {
    clickCount += 1; 

    let counter = document.getElementById("click-counter");
    if (clickCount >= 10000){
        counter.innerHTML = (clickCount/1000)+"k";
    }else{
        counter.innerHTML = clickCount;
    }
}

