$(function() {
  

  $("#numbers").submit(function(e) {
    var num1 = $("#number1").val();
    var num2 = $("#number2").val();

    $("#resultsA").append(num1+ " + " +num2 + "</br>");
    $("#resultsB").append(parseInt(num1) + parseInt(num2) + "</br>");
    $("#number1").val("");
    $("#number2").val("");
    e.preventDefault();

    
  })
  
});