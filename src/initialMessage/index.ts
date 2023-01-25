import figlet from "figlet";

import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";

async function initialMessage() {
  // console.clear();
  const message = "Git-Cloner \n";

  figlet(message, (err, data) => {
    console.log(gradient.rainbow.multiline(data));
  });

  const messageToWelcome = chalkAnimation.rainbow(
    "Welcome to Git-Cloner CLI \n"
  );

  setTimeout(() => {
    messageToWelcome.start();
  }, 500);

  setTimeout(() => {
    messageToWelcome.stop();
  }, 2000);
}

export default initialMessage;
