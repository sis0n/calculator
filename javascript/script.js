const display = document.getElementById("display");

function toDisplay(input){
    if (display.value.length < 17) {
        display.value += input;
    }
}

function clearDisplay(input){
    display.value = "";
}

function calculate(input){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        alert("Invalid");
    }
}

function deleteDisplay(input){
    display.value = display.value.slice(0,-1);
}

function divideToHunnid(input){
    display.value = display.value / 100;
}