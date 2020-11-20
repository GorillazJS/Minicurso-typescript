"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const button = document.getElementById('button');
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
input1.value = Colors.black;
function sum(a, b) {
    return a + b;
}
button.addEventListener('click', () => {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
