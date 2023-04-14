import { App } from "@slack/bolt";
import * as dotenv from "dotenv";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  port: 3000,
});

app.command("/hello", async ({ ack, command, say }) => {
  await ack();
  await say(`${command.text}`);
});

// Serve slack app
(async () => {
  await app.start();
})();
