
var rng = document.getElementById('r1');
var div = document.getElementById('test');
var div2 = document.getElementById('test2');

function calc(event) {
    div.style.height = rng.value + 'px';
    return check()
}

function check() {
 
    if (rng.value <= 20) {
     appropriation(0.02);
    }
     else if (rng.value >= 20 && rng.value <= 50) {
     appropriation(0.04);
    } else if (rng.value >= 50 && rng.value <= 75) {
    appropriation(0.06);
    } else if (rng.value >= 100 && rng.value <= 100) {
    appropriation(0.08);
    }
}
function appropriation(val) {
div2.style.height = rng.value * val + 'px';
}

num.oninput = function fun1() {

    rng.value = num.value
    return calc(num.value)
}

rng.oninput = function fun2() {

    num.value = rng.value;
    return calc(rng.value)
}