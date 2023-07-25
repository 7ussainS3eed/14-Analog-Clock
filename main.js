let rotationPoint = 0;
let clock = document.querySelector(".clock");
let counter = 12;
let rotationPoint2 = 0;
for (i = 0; i < 60; i++) {
    if (rotationPoint % 5 == 0) {
        let special = document.createElement("div");
        special.classList.add("special");
        clock.appendChild(special);
        special.style.cssText = "transform: rotate(" + rotationPoint + "deg)";
        let num = document.createElement("div");
        num.classList.add("num");
        clock.appendChild(num);
        num.style.cssText = "transform: rotate("+ rotationPoint2 + "deg)";
        let content = document.createElement("div");
        content.classList.add("content");
        num.appendChild(content);
        content.appendChild(document.createTextNode(counter));
        counter--;
        content.style.cssText = "transform: rotate(" + -rotationPoint2 + "deg)";
        rotationPoint2 = rotationPoint2 - 30;
    }
    else {
        let point = document.createElement("div");
        point.classList.add("point");
        clock.appendChild(point);
        point.style.cssText = "transform: rotate(" + rotationPoint + "deg)";
    }
    rotationPoint = rotationPoint + 6;
}

let myFunction = function() {
    new Audio("tick.m4a").play();
    let seconds = document.querySelector(".seconds");
    let minutes = document.querySelector(".minutes");
    let hours = document.querySelector(".hours");
    let d = new Date();
    seconds.style.cssText = "transform: rotate(" + d.getSeconds() * 6 + "deg)";
    minutes.style.cssText = "transform: rotate(" + d.getMinutes() * 60 * 0.1 + "deg)";
    let finalHours = 0;
    if (d.getHours() > 12) {
        finalHours = d.getHours() - 12;
    }
    else {
        finalHours = d.getHours();
    }
    hours.style.cssText = "transform: rotate(" + ((finalHours + (d.getMinutes() / 60)) * 60) / 2 + "deg)";
}

myFunction();
setInterval(myFunction, 1000);