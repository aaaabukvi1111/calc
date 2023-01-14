function summa() {
let x = document.getElementById('num1').value;
let y = document.getElementById('num2').value;
document.getElementById('result').innerHTML = (+x + +y);

}
function summa2() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x - +y);
    
    }
function summa3() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x * +y);
}
function summa4() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x / +y);
}