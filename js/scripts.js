$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    $("#quiz-hide").hide();

    const question1 = $("input:radio[name=question1]:checked").val(); // undefined/null
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();

    let evilLevel = 0;
    
    if (question1 === "1") {
      evilLevel++;
    } else if (question1 === "2") {
      evilLevel += 2;
    } else if (question1 === "3") {
      evilLevel += 3;
    };
    if (question2 === "1") {
      evilLevel++;
    } else if (question2 === "2") {
      evilLevel += 2;
    } else if (question2 === "3") {
      evilLevel += 3;
    };
    if (question3 === "1") {
      evilLevel++;
    } else if (question3 === "2") {
      evilLevel += 2;
    } else if (question3 === "3") {
      evilLevel += 3;
    };
   
    if (evilLevel <= 4) {
      $("#villain1").show();
    } else if (evilLevel <= 7) {
      $("#villain2").show();
    } else if (evilLevel <= 9) {
      $("#villain3").show();
    };
  });
});

// Options
      // WE can check one value at a time (if (value) {})
         // If the potential value (input) has multiple potential outcomes, this may be the way to go
      //  We can check multiple with && (if (value && value) {})
         // Verify two items in the same step because if one or both of these aren't true, you want the same behavior
      // We can check multiple with || (if (value || value) {})
         // Softly check that EITHER value is true, and if it is, run the code
    
    // <input type="text" required>
    // manually validate (using branching)
        // if (x) <-- if x exists or has a value (is it truthy)
        // else { print some sort of validation to tell them to fill out the form correctly }
    
    // set default selection