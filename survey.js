const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("What is your name?", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r1.question("What's an activity you like doing?", (answer) => {
    console.log(`Nice, so you are: ${answer}`);

    r1.question("What do you listen to while doing that?", (answer) => {
      console.log(`I see, ${answer}`);
      r1.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        (answer) => {
          console.log(`Great, ${answer}`);

          r1.question(
            "What's your favourite thing to eat for that meal?",
            (answer) => {
              console.log(`Nice, ${answer}`);
              r1.question(
                "Which sport is your absolute favourite?",
                (answer) => {
                  console.log(`Thanks for letting me know, ${answer}`);
                  r1.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    (answer) => {
                      console.log(`Not bad, ${answer}`);
                      r1.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
