$(document).ready(function(){
    // Radio Buttons
    $("form#userInput").submit(function(event){
        event.preventDefault();
        $("div.info").removeClass();
        //Read selected option
        var animalInput = $("input:radio[name=animal]:checked").val();
        // Test
        // alert(animalInput);
        if ( animalInput === "Turtle") {
            // Test
            alert(animalInput);
            $("#turtle").show();
        } else if ( animalInput === "Whale") {
            // Test
            alert(animalInput);
            $("#whale").show();
        } else {
            // Test
            alert(animalInput);
            $("#polarBear").show();
        }
    });
});