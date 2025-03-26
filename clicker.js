let clickCount = 0;
var ClickCounter = document.getElementById("click-counter");

function handleClick(){
    clickCount += 1;
    ClickCounter.innerHTML = clickCount;
}