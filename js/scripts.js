// Back-End Logic
var input = "";
var output = "";

function puzzlefy(string){
  var puzzle = string.split("");
  for (i = 0; i < string.length; i++){
    if (puzzle[i] === "a"
      || puzzle[i] === "e"
      || puzzle[i] === "i"
      || puzzle[i] === "o"
      || puzzle[i] === "u"){
        puzzle[i] = "-";
    }

  }
  return puzzle.join("");
}

// Back-End Logic
$("form").submit(function(event){
  event.preventDefault();
  $("form").hide();
  input = $("#input").val();
  $("#output").text(puzzlefy(input));
});
