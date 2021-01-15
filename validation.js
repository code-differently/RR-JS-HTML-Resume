
// create validation for the contact form

// validation for first & last name
function checkLetters(inputltrs) { 
    let letters = /^[A-Za-z]+$/; //stores valid letters (capitals & lowercase) in variable

    if (inputltrs.value.match(letters)) {  // if the user input matches any of the values in variable letters
        alert('Thank you for entering your name.'); // if user input contains only letters, pop-up alert window for user w/ message
        return true;
    } else {
        alert('Oops!  Please enter letters only here.')   //if user input contains other than letters pop-up alert window for user w/ message
        return false;
    }
}

