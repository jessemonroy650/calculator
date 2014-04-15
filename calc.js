$(function() {
  

  $("#numbers").submit(function(e) {
    var operation = $("#operation").val();

    
    var result = 0;
    var error = false;

    try {
       result = eval(operation);
    } catch (e) {
       // statements to handle EvalError exceptions
       error = true;
       console.log("error: " + e);
       alert("you must enter a number");
       
    } finally {
      $("#operation").val("");
    }

    if( error === false ) {
      $("#resultsA").append(operation + "</br>");
      $("#resultsB").append(result);
      $("#resultsB").append("</br>");
    }
 
    
    e.preventDefault();

    
  })
  
});