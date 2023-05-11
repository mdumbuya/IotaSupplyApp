
const readline = require('readline');
const { generateSeed } = require('./iota_functions/node_actions');

function handleChoice(choice) {
    switch (choice) {
      case '1':
        // Implement functionality for creating channel and publishing message
        generateSeed();
        break;
      case '2':
        // Implement functionality for fetching and displaying messages from a channel
     
        break;
      case '2':
        // Implement functionality for fetching and displaying messages from a channel
      
        break;
      case '4':
        // Exit the program

        console.log('Exiting...');
        process.exit(0);
        break;

      default:
        console.log('Invalid choice. Please try again.');
        displayMenu();
        break;
    }
}

function displayMenu() {
const options = [
    '1. Create a product chanel',
    '2. Record information',
    '3. Fetch and display messages from a channel',
    '4. Exit'
];

console.log('--- Menu ---');
options.forEach(option => console.log(option));
}

function startProgram() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function promptChoice() {
    rl.question('Enter your choice: ', choice => {
      handleChoice(choice);
      displayMenu();
      promptChoice();
    });
  }

  displayMenu();
  promptChoice();
}

// Fuctions exported
module.exports = { startProgram };