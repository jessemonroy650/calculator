$(function() {
  

  $("#numbers").submit(function(e) {
    var num1 = $("#number1").val();
    var num2 = $("#number2").val();

    $("#resultsA").append(num1+ " + " +num2);
    $("#resultsB").append(parseInt(num1) + parseInt(num2));

    e.preventDefault();
    
  })
  
});