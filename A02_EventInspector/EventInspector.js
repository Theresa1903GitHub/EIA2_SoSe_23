"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let div0 = document.getElementById("div0");
        let div1 = document.getElementById("div1");
        let button = document.getElementById("btn");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        button.addEventListener("click", customEvent);
        document.addEventListener("MyCustomEvent", output);
    }
    function setInfoBox(_event) {
        let span = document.getElementById("span");
        let x = _event.clientX;
        let x1 = x + 15;
        let y = _event.clientY;
        let y1 = y + 15;
        let target = _event.target;
        let position = "X-Koordinate: " + x + "<br>" + "Y-Koordinate: " + y + "<br>" + "Target: " + target;
        span.innerHTML = position;
        //span.style.position = "fixed";
        span.style.top = `${y1}px`;
        span.style.left = `${x1}px`;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function customEvent(_event) {
        let button = document.getElementById("btn");
        let MyEvent = new CustomEvent('MyCustomEvent', {
            detail: {},
            bubbles: true
        });
        button.dispatchEvent(MyEvent);
    }
    function output(_event) {
        console.log("That's my CustomEvent: " + _event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map