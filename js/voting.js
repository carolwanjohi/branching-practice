$(document).ready(function(){
    //Check age
    var age = parseInt(prompt("How old are you?"));

    if (age >=18 && age <=25) {
        $("#youngVoters").show();
    } else if (age > 25) {
        $("#matureVoters").show();
    } else {
        $("#minors").show();
    }
});