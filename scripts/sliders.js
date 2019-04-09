var slider1 = document.getElementById("slideRange1");
var slider2 = document.getElementById("slideRange2");
var slider3 = document.getElementById("slideRange3");
var output1 = document.getElementById("value1");
var output2 = document.getElementById("value2");
var output3 = document.getElementById("value3");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

slider2.oninput = function() {
    output2.innerHTML = this.value;
}

slider3.oninput = function() {
    output3.innerHTML = this.value;
}               