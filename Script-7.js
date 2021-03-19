function nameShow() {
    let name = prompt("What's your name?")
    let confirm = window.confirm("This is your name now: " + name)
    console.log(name);
    document.getElementById("name-section").innerHTML = "Your name is: " + name;
}
