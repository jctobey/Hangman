

    // Creates an array that lists out all of the options (Letters for Hangman).
    var HangmanKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Here's our Hangman variables
    //Obviously I wrote my secret words before I had breakfast
    var Bagels = ["Poppyseed", "Everything", "Garlic", "JalapenoCheddar", "SesameSeed", "CinnamonRaisin", "Plain", "Pumpernickel", "AsiagoCheese","RyeBread"]
    var Random;
    var RandomArray;
    let guessesRemaining = 8;
    let correctGuesses = 0;
    let hideLetters = [];
    let Wins = 0;
    let guessedLetters = [];
    function secretBlanks(Random) {
      for (var i = 0; i < Random.length; i++) {
        hideLetters.push("_ ");
      }
      return hideLetters.join("");
    }
    function resetGame() {
      guessesRemaining = 8;
      guessedLetters = [];
      hideLetters = [];
      correctGuesses = 0;
      Random = Bagels[Math.floor(Math.random() * Bagels.length)];
      RandomArray = Random.split("");
      document.querySelector(".word").innerHTML = "<p>Your word: " + secretBlanks(Random);
      document.querySelector(".guesses").innerHTML = "<p>Guesses Remaining: " + guessesRemaining + "</p>";
      document.querySelector(".letters").innerHTML = "<p>Letters Guessed: " + guessedLetters + "</p>";
      document.querySelector(".game").innerHTML = "";
    }

    // This function is run whenever the user presses a key.
    resetGame()
    document.onkeyup = function (event) {


      // Determines which key was pressed.
      let userGuess = event.key;
      if (!(HangmanKeys.includes(userGuess))) {
        alert("invalid letter selection")
      }
      else {

        if (!(RandomArray.includes(userGuess)) && !(guessedLetters.includes(userGuess))) {

          guessesRemaining--;
        }

        console.log(guessesRemaining)


        if (!(guessedLetters.includes(userGuess))) {
          guessedLetters.push(userGuess);
        }

        console.log(guessedLetters)
        for (var i = 0; i < RandomArray.length; i++) {
          if ((RandomArray[i].toLowerCase() === userGuess)) {
            hideLetters[i] = userGuess;
            correctGuesses++;
          } if (correctGuesses === RandomArray.length) {
            document.querySelector(".game").innerHTML = "You Win!"
            Wins++;
            
          }

        }
        console.log(hideLetters)
        console.log(RandomArray)







        var wordhtml =
          "<p> Your word: " + hideLetters.join("") + "<p>"
        var guesseshtml =
          "<p>Guesses Remaining: " + guessesRemaining + "</p>"
        var lettershtml =
          "<p>Letters Guessed: " + guessedLetters + "</p>"
        var correctguesseshtml =
          "<p>Correct Guesses: " + correctGuesses + "</p>"
        var winshtml =
          "<p>Wins: " + Wins + "</p>"




        // Set the inner HTML contents of the #game div to our html string
        if (guessesRemaining < 1) {
          document.querySelector(".game").innerHTML = "Game Over";
          // Just playing around with this code, which I grabbed off of a StackOverflow solution. Does it make sense to put a reset function here?

        }
        else {
          document.querySelector(".word").innerHTML = wordhtml;
          document.querySelector(".guesses").innerHTML = guesseshtml;
          document.querySelector(".letters").innerHTML = lettershtml;
          document.querySelector(".correctguess").innerHTML = correctguesseshtml;
          document.querySelector(".wins").innerHTML = winshtml;
        };
      }

    }
 

