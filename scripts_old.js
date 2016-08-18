$(document).ready(function() {

  $("form").submit(function(event){

    event.preventDefault();

    var initialText = $("textarea#initial-text").val();
    var arraySentence = initialText.split(" ");

    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    var regex = new RegExp("^[a-zA-Z]+$");

    var pigLatin = [];

    for (var i = 0; i < arraySentence.length; i++) {
      if (!regex.test(arraySentence[i].charAt(0))) {
        pigLatin.push(arraySentence[i]);
      } else if (vowels.indexOf(arraySentence[i].charAt(0)) == -1) {
          var consonantCheck = arraySentence[i];
          var newConsonantWord = [];
          while(s.charAt(0) === '0')
          s = s.substr(1);



          pigLatin.push(newConsonantWord);
      } else {
        pigLatin.push(arraySentence[i] + "ay");
      }
    };

    $("#translation").text(pigLatin);


    // for (var i = 0; i < arraySentence.length; i++) {
    //   if (vowels.indexOf(arraySentence[i].charAt(0)) == -1){
    //   alert("consonant yes")
    //   }
    // };



  });

});

for (var j = 0; j < consonantCheck.length; j++) {
  if (vowels.indexOf(consonantCheck.charAt(j) == -1)) {
    newConsonantWord.push(consonantCheck.slice().pop(j));
  }
};



// working for vowels:
//
// var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//
// var regex = new RegExp("^[a-zA-Z]+$");
//
// var dealWithVowels = [];
//
// for (var i = 0; i < arraySentence.length; i++) {
//   if (!regex.test(arraySentence[i].charAt(0))) {
//     pigLatin.push(arraySentence[i]);
//   } else if (vowels.indexOf(arraySentence[i].charAt(0)) == -1) {
//     pigLatin.push(arraySentence[i]);
//   } else {
//     pigLatin.push(arraySentence[i] + "ay");
//   }
// };
