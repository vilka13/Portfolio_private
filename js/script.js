function validateForm() {
    var blackFont = "#000000";
    var redFont = "#FF0000";

    var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
        keyboard: false
    });

    var name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("labelName").innerText = "Imie nie może być puste";
        document.getElementById("labelName").style.color = redFont;
        return false;
    } else {
        document.getElementById("labelName").innerText = "Wpisz imię";
        document.getElementById("labelName").style.color = blackFont;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("labelEmail").innerHTML = "E-mail nie może być pusty";
        document.getElementById("labelEmail").style.color = redFont;
        return false;
    } else if (!re.test(email)) {
        document.getElementById("labelEmail").innerHTML = "Nieprawidłowy format wiadomości e-mail";
        document.getElementById("labelEmail").style.color = redFont;
        return false;
    } else {
        document.getElementById("labelEmail").innerText = "Wpisz Email";
        document.getElementById("labelEmail").style.color = blackFont;
    }

    var subject = document.getElementById("subject").value;
    if (subject == "") {
        document.getElementById("labelSubject").innerHTML = "Temat nie może być pusty";
        document.getElementById("labelSubject").style.color = redFont;
        return false;
    } else {
        document.getElementById("labelSubject").innerText = "Wpisz temat";
        document.getElementById("labelSubject").style.color = blackFont;
    }

    var message = document.getElementById("message").value;
    if (message == "") {
        document.getElementById("labelMessage").innerHTML = "Wiadomość nie może być pusta";
        document.getElementById("labelMessage").style.color = redFont;
        return false;
    } else {
        document.getElementById("labelMessage").innerText = "Wpisz wiadomość";
        document.getElementById("labelMessage").style.color = blackFont;
    }

    myModal.toggle()
};

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
