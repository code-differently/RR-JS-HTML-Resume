// function checkForBlank() {

//     let isValid = true;
//     let thisForm = document.getElementById("contactForm").getElementsByTagName('input');
    
//     for(let i = 0; i < thisForm.length; i++) {
//         let thisInput = thisForm[i];
//         if(thisInput.type.toLowerCase() == 'text') {
            
//             if(!thisInput.value.length > 0){
//                 isValid = false;
//                 alert('no value entered for ' + thisInput.id);
//             }
//         }
//     }

//     return isValid;
// }

function checkForBlank() {

    let isValid = true;
    let thisForm = document.getElementById("contactForm").getElementsByTagName('input');
    
    for(let i = 0; i < thisForm.length; i++) {
        let thisInput = thisForm[i];
        if(thisInput.type.toLowerCase() == 'text') {
            
            if(!thisInput.value.length > 0){
                isValid = false;
                let labelName = findLabelForInput(thisInput.id.toString());
                alert('no value entered for ' + labelName);
            }
        }
    }

    return isValid;
}

function findLabelForInput(inputID) {
    var idVal = inputID.id;
    labels = document.getElementsByTagName('label');
    for( var i = 0; i < labels.length; i++ ) {
       if (labels[i].htmlFor.toString() == inputID)
            return labels[i].textContent;
    }
 }