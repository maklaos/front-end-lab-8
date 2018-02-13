let start = confirm('Do you want to play a game?');

if (start) {
  let gameCount = 1;
  let isPlaying = true;
  let prize = 0;
  let prizes = [2.5, 5, 10];

  while (isPlaying) {
    let numberToGuess = Math.round(Math.random() * 5 * gameCount);
    let range = 5 * Math.pow(2, gameCount-1);
    let attempts = 3;
    let userInput = -1;

    while (userInput != numberToGuess && attempts != 0) {
      currentAttemptPrize = parseInt(prizes[attempts -1] * Math.pow(3, gameCount-1));

      userInput = prompt('Enter a number from 0 to ' + range +
       '\nAttempts left: ' + attempts +
        '\nTotal prize: ' + prize  + '$' +
        '\nPossible price on current attempt: ' + currentAttemptPrize + '$');

      attempts--;
    }

    if (userInput == numberToGuess) {
      prize += currentAttemptPrize;
      isPlaying = confirm('Are you whant to continue a game?');

      if (!isPlaying) {
        console.log('Thank you for a game. Your prize is: ' + prize + '$');
      }
    } else {
      console.log('Thank you for a game. Your prize is: ' + prize + '$');
      isPlaying = confirm('Are you whant to continue a game?');
      gameCount = 0;
    }

    gameCount++;
  }
} else {
  console.log('You did not become a millionaire');
}
