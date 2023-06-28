

function calculate() {
    let totalSum = 0;

    function calculate() {
        let totalSum = 0;

        // C#
        if (document.getElementById("CSharp").checked && document.getElementById("CSharpHours").value !== "") {
            let sum = document.getElementById("CSharpPrice").innerHTML * document.getElementById("CSharpHours").value
            document.getElementById("CSharpSum").innerHTML = sum;
            totalSum = totalSum + sum;
        } else {
            document.getElementById("CSharpSum").innerHTML = 0;
        }

        // C++
        if (document.getElementById("CPP").checked && document.getElementById("CPPHours").value !== "") {
            let sum = document.getElementById("CPPPrice").innerHTML * document.getElementById("CPPHours").value
            document.getElementById("CPPSum").innerHTML = sum;
            totalSum = totalSum + sum;
        } else {
            document.getElementById("CPPSum").innerHTML = 0;
        }

        // JavaScript
        if (document.getElementById("HTML").checked && document.getElementById("HTMLHours").value !== "") {
            let sum = document.getElementById("HTMLPrice").innerHTML * document.getElementById("HTMLHours").value
            document.getElementById("HTMLSum").innerHTML = sum;
            totalSum = totalSum + sum;
        } else {
            document.getElementById("HTMLSum").innerHTML = 0;
        }

        // HTML
        if (document.getElementById("JavaScript").checked && document.getElementById("JavaScriptHours").value !== "") {
            let sum = document.getElementById("JavaScriptPrice").innerHTML * document.getElementById("JavaScriptHours").value
            document.getElementById("JavaScriptSum").innerHTML = sum;
            totalSum = totalSum + sum;
        } else {
            document.getElementById("JavaScriptSum").innerHTML = 0;
        }

        document.getElementById("totalSum").innerHTML = totalSum;
    }
}








