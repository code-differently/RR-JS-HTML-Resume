// Find blank text fields and display alert box to user
function checkForBlank() {
    let alertBeg = "No value entered for: ";
    let alertMessage = "";

    let isValid = true;
    let thisForm = document.getElementById("contactForm").getElementsByTagName('input');
    
    for(let i = 0; i < thisForm.length; i++) {
        let thisInput = thisForm[i];
        if(thisInput.type.toLowerCase() == 'text') {
            
            if(!thisInput.value.length > 0){
                isValid = false;
                let labelName = findLabelForInput(thisInput.id);
                concatInputNames(labelName);                
            }

        }
    }

    if(!isValid){
        alert(alertBeg + alertMessage);
    }

    return isValid;

    //Add missing label names to the alert message
    function concatInputNames(labelName) {
        if (alertMessage.length > 0) {
            alertMessage += ", " + labelName;
        } else {
            alertMessage += labelName;
        }
    }
}

//Search by input element id to find corresponding htmlFor label and return text context
function findLabelForInput(inputID) {
    var idVal = inputID.id;
    labels = document.getElementsByTagName('label');
    for( var i = 0; i < labels.length; i++ ) {
       if (labels[i].htmlFor.toString() == inputID)
            return labels[i].textContent;
    }
 }