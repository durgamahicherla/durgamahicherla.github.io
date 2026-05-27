//Typing Animation
let name = "Mahicherla Durga Posi Lakshmi";
let index = 0;

function typeName () {
    if ( index < name.length) {
        document.getElementById("typingName").innerHTML += name.charAt(index);
        index++;
        setTimeout(typeName, 100); //types one letter every 100ms
    }
}

//star typing when page loads
typeName();

//Darkmode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let btn=document.getElementById("darkBtn");
    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light Mode";
    } else {
        btn.innerHTML = "🌙 Dark Mode";
    }
}
