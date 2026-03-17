import "dotenv/config";
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "langchain";
import { sendEmail } from "./mail.service.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
});

const messages = [];

while (true) {
  const userInput = await rl.question("\x1b[32myou:\x1b[0m ");

  messages.push(new HumanMessage(userInput));

  const response = await model.invoke(messages);

  messages.push(response);

  console.log(`\x1b[34m[AI]\x1b[0m ${response.content}`);
}

rl.close();
