const readline = require('readline');

function handleChoice(choice) {
    switch (choice) {
      case '1':
        // Implement functionality for creating channel and publishing message
        createChannelAndPublishMessage();
        break;
      case '2':
        // Implement functionality for fetching and displaying messages from a channel
        fetchAndDisplayMessages();
        break;
      case '3':
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
    '1. Create channel and publish message',
    '2. Fetch and display messages from a channel',
    '3. Exit'
];

console.log('--- Menu ---');
options.forEach(option => console.log(option));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your choice: ', choice => {
    rl.close();
    handleChoice(choice);
});
}
  
function startProgram() {
displayMenu();
}

// Export the greet function to make it accessible in other files
module.exports = { startProgram };