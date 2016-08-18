$(document).ready(function() {

  $("form").submit(function(event){

    event.preventDefault();

    var initialText = $("textarea#initial-text").val();

    var words = initialText.split(" ");

    var phrase = words.map(function(word){

      var regex = new RegExp("^[a-zA-Z]+$");

      if (!regex.test(word)) {
        return word;
      } else {
          for(var i=0; i<word.length; i++) {
            if (!"AEIOUaeiou".includes(word[0])) {
              if (((word.substr(0,1)==="q")||(word.substr(0,1)==="Q"))&&
                  ((word.substr(1,1)==="u")||(word.substr(1,1)==="U"))) {
                  word = word.substr(2) + word.substr(0,2);
              } else {
                word = word.substr(1) + word.substr(0,1);
              }
            } else {
              word+="ay";
              return word;
            }
          }
      }
    });

    var pigLatin = phrase.join(" ");

    $("#translation-title").text("Your text in Pig Latin, oinkjoy!:");

    $("#translation").text(pigLatin);

  });

});



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

//     var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//
//     var regex = new RegExp("^[a-zA-Z]+$");
//
//     var doNothing = [];
//
//     for (var i = 0; i < translate.length; i++) {
//       if (!regex.test(translate[i].charAt(0))) {
//         doNothing.push(translate[i]);
//         translate.substr([i],1);
//       } else if (vowels.indexOf(translate) == -1) {
//         doNothing.push(translate[i]);
//         translate.substr([i],1);
//       }
//
//       alert(allwords);
//       alert(doNothing);
//   };
//
// });
// });

    // var phrase = words.map(function(word){
    //
    //   var doNothing = [];
    //
    //   var regex = new RegExp("^[a-zA-Z]+$");
    //
    //   var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    //
    //   if (vowels.indexOf(word) == -1) {
    //     delete word;
    //   } else if (!regex.test(word.charAt(0))) {
    //     delete word;
    //   } else {
    //     return word;
    //   }
    // });
