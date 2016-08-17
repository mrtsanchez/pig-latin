$(document).ready(function() {

  $("form").submit(function(event){

    event.preventDefault();

    var initialText = $("textarea#initial-text").val();
    var arrayInitialText = initialText.split("");

    alert(arrayInitialText);

  });

});
