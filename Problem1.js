

function calculateVAT( price ) {
     
    if ( price < 0 || typeof price != "number") {
        return 'Invalid';
    }
    let vat = 7.5 / 100;
    const totalVat = price * vat;
    return totalVat;
}


function validContact(contact) {

    if (typeof contact != "string") {
        return "Invalid";
        
    }
    else if (contact.length !== 11 || contact.includes(" ") || contact[0] !== "0" || contact[1] !== "1") {
        return false;
    }
    return true;       
}



function willSuccess(marks) {

    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let passMark = 50;
    let pass = 0;
    let fail = 0;
    for (const mark of marks) {
        if (mark >= passMark) {
            pass++;         
        }
        else {
            fail++
        }      
    }
    if (pass > fail) {
        return true;
    }
    else {
        return false;
    }         
}

 

function validProposal(person1, person2) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
    return 'Invalid';
    }
    const ageDifference = Math.abs(person1.age - person2.age);
    if (person1.gender !== person2.gender && ageDifference <= 7 ) {
        return true;
    }
    else {
        return false;
    }
    
}



function calculateSleepTime(times) {
    for (const time of times) {
        if (typeof time != 'number') {
            return "Invalid";
        }
    }
    let totalTime = 0;
    for (const time of times) {
        totalTime = time + totalTime;
    }

    let hour = Math.floor(totalTime / 3600);
    let remainingSecond = totalTime % 3600;
    let minute = Math.floor(remainingSecond / 60);
    let second = totalTime % 60;
    return { hour, minute, second };
   
         
}


