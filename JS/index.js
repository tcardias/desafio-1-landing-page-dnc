let valueDisplays = document.querySelectorAll(".num");
let interval = 0.8;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        if(endValue>100000){
            startValue +=25000;
        } else {
            startValue+=5;
        }
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
})