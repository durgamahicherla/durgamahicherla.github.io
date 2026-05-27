function validateForm() {
    let message = document.getElementById("messageBox").value;

    if(message == "") {
        document.getElementById("formResult").innerHTML = 
         "❌ Please write a message before sending!";
        document.getElementById("formResult").style.color = "red";

    } else if (message.length < 10) {
        document.getElementById("formResult").innerHTML = 
        "❌ Message is too short! Write at least 10 characters.";
        document.getElementById("formResult").style.color = "red";
    } else {
        document.getElementById("formResult").innerHTML = 
        "✅ Message sent successfully! I will reply soon.";
        document.getElementById("formResult").style.color = "green";
        document.getElementById("messageBox").value = "";
    }
}