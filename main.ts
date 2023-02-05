import initialMessage from "./worker/initialMessage/index.ts";
import { HowToUse } from "./worker/Messages/HowToUse.ts";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

initialMessage();

await sleep();
HowToUse();
