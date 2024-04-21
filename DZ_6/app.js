let generateButtons = document.getElementById("#numbers");
function pad(number){
    return (number < 10 ? '0' : '') + number;
}
function generateButton() {
    var numbers = []
    for (var i = 0; i < 6; i++) {
        numbers.push(pad(Math.floor(Math.random() * 99) + 1));
    }
    document.getElementById("numbers").innerHTML = numbers.join("");
}
document.getElementById("generateButton").addEventListener("click", generateButton);
//не могу найти ошибку из-за которой числа стоят в кашу
