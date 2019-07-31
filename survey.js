const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable 👻', (answer1) => {
  // TODO: Log the answer in a database
  //console.log(`Thank you for your valuable feedback: ${answer1}`);
  let name = answer1;
  rl.question('Whats an activity you like doing 😈', (answer2) => {
    let active = answer2;
    rl.question('What do you listen to while doing that? 🎶', (answer3) => {
      let listen = answer3;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc 🍕", (answer4) => {
        let meal = answer4;
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          let food = answer5;
          rl.question("Which sport is your absolute favourite? 🏆", (answer6) => {
            let sport = answer6;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! 🧛🏻‍♂️', (answer7) => {
              let superpower = answer7;
              console.log(`${name} loves listening to ${listen} while ${active}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});

// Once all questions are answered, our survey app should output 
// a fully formed paragraph for their online profile, similar to the 
// one shown previously. It should then exit.