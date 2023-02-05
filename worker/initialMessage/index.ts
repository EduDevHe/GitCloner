import figlet from "npm:figlet";

import chalkAnimation from "npm:chalk-animation";
import gradient from "npm:gradient-string";

async function initialMessage() {
  console.clear();
  const message = "Git-Cloner \n";

  await figlet(message, (err, data: string) => {
    console.log(gradient.rainbow.multiline(data));
  });

  const messageToWelcome = chalkAnimation.rainbow(
    "Welcome to Git-Cloner CLI \n",
  );

  setTimeout(() => {
    messageToWelcome.start();
  }, 500);

  setTimeout(() => {
    messageToWelcome.stop();
  }, 2000);
}

export default initialMessage;
