let stpbl1 = document.getElementById("stepbl1");
let stpbrd1 = document.getElementById("step-border1");

let stpbl3 = document.getElementById("stepbl3");
let stpbrd3 = document.getElementById("step-border3");

let stpbl2 = document.getElementById("stepbl2");
let stpbrd2 = document.getElementById("step-border2");


stpbl1.onmouseover = function(){
    stpbrd1.style.borderBottom = "3px solid #fff";
}
stpbl1.onmouseout = function(){
    stpbrd1.style.borderBottom = "3px solid #000";
}

stpbl2.onmouseover = function(){
    stpbrd2.style.borderBottom = "3px solid #fff";
}
stpbl2.onmouseout = function(){
    stpbrd2.style.borderBottom = "3px solid #000";
}

stpbl3.onmouseover = function(){
    stpbrd3.style.borderBottom = "3px solid #fff";
}
stpbl3.onmouseout = function(){
    stpbrd3.style.borderBottom = "3px solid #000";
}
