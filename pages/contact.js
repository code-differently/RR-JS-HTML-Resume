function checkForBlank() {

    let isValid = true;
    var thisForm = document.getElementById("contactForm").getElementsByTagName('input');
    
    for(var i = 0; i < thisForm.length; i++) {
        let thisInput = thisForm[i];
        if(thisInput.type.toLowerCase() == 'text') {
            
            if(!thisInput.value.length > 0){
                isValid = false;
                alert('no value entered for ' + thisInput.id);
            }
        }
    }

    return isValid;
}