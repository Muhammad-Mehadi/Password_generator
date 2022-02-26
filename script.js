function Generate() {
    var length = document.getElementById("password-length").value;
    console.log(length);
    var specialCharacters = document.getElementById("special-characters").checked;
    console.log(specialCharacters);
    var digit = document.getElementById("digit").checked;
    console.log(digit);
    var lower_characters = document.getElementById("lower-characters").checked;
    console.log(lower_characters);
    var upper_characters = document.getElementById("upper-characters").checked;
    console.log(upper_characters);
}