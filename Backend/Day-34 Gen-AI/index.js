import "dotenv/config";
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
});

while (true) {
  const userInput = await rl.question("\x1b[32myou:\x1b[0m ");

  const response = await model.invoke(userInput);

  console.log(`\x1b[34m[AI]\x1b[0m ${response.content}`);


}

rl.close();
