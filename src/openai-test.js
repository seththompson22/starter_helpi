const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {
  // Define the next input based on the assistant's response
  const nextInput = {
    role: 'user',
    content: 'Actually nevermind, i am writing questions for a career survey. can you think of some basic questions i could add?.',
  };

  // Make a request to the API to continue the conversation
  const nextCompletion = await openai.chat.completions.create({
    messages: [nextInput],
    model: 'gpt-3.5-turbo',
  });

  // Log the response from the assistant
  console.log(nextCompletion.choices[0]);
}

main();
