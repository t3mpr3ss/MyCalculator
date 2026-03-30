
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    button.onclick = function () {
        console.log(button.innerText);
    };
});

let screen = document.getElementById("myText");

buttons.forEach(function(button) {
    button.onclick = function () {
        screen.value += button.innerText;
    };
});

buttons.forEach(function(button) {
    button.onclick = function () {

        let value = button.innerText;

        if (value === "AC") {
            screen.value = "";
        } 
        else if (value === "=") {
            try {
                screen.value = eval(screen.value);
            } catch {
                screen.value = "Error";
            }
        } 
        else if (value === "x") {
            screen.value += "*";
        } 
        else if (value === "(") {
            let lastChar = screen.value.slice(-1);

            if (lastChar && !isNaN(lastChar)) {
                screen.value += "*(";
            } else {
                screen.value += "(";
            }
        } 
        else if (value === ")") {
            let open = (screen.value.match(/\(/g) || []).length;
            let close = (screen.value.match(/\)/g) || []).length;

            if (close < open) {
                screen.value += ")";
            }
        } 
        else {
            screen.value += value;
        }

    };
});
