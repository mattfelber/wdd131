const inputSpan = document.querySelector('.input');
const outputDiv = document.querySelector('.output');

const commands = {
  '--help': showHelp,
  '--whois': displayWhois,
  '--projects': displayProjects, //  image/link implementation
  '--linkedin': displayLinkedin, // LinkedIn URL
  '--github': displayGithub, // GitHub URL
  '--clear': clearTerminal,
};

function showHelp() {
    const message = `Available commands:
    --whois
    --projects
    --linkedin
    --github
    --clear`;
    displayOutput(message.split('\n')); // Split message into an array of lines
  }

function displayWhois() {
    const whoisIntro = `Hi! I'm a developer with experience in various programming languages 
    like Python, C#, Java, and JavaScript. I also have experience in technical support 
    and I'm passionate about learning new technologies and creating projects.`;
    displayOutput(whoisIntro);
  }

// project image/link 
function displayProjects() {
  const message = "https://mattfelber.github.io/wdd131/";

  // Set the inner HTML of the element to display the links
  displayOutput(message);
}

function displayLinkedin() {
  const url = 'https://www.linkedin.com/in/matheusfelber/'; // LinkedIn URL
  displayOutput(`My LinkedIn profile: ${url}`);
}

function displayGithub() {
  const url = 'https://github.com/mattfelber'; //  GitHub URL
  displayOutput(`My GitHub profile: ${url}`);
}

function clearTerminal() {
  outputDiv.innerHTML = '';
}

function displayOutput(message, className = '') {
    const outputElement = document.createElement('p');
  
    if (typeof message === 'string') {
      // Single string message, display as usual
      outputElement.textContent = message;
    } else if (Array.isArray(message)) {
      // Array of messages (lines), iterate and display each line
      outputElement.textContent = message.join('\n'); // Join lines with newline characters
    } else {
      // Unexpected message type, handle as needed (e.g., error message)
      console.error("Invalid message type passed to displayOutput:", message);
    }
  
    if (className) {
      outputElement.classList.add(className);
    }
  
    outputDiv.appendChild(outputElement);
    outputDiv.scrollTop = outputDiv.scrollHeight; // Scroll to bottom after adding output
  }

inputSpan.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    event.stopPropagation();
    
    const userInput = inputSpan.textContent.trim().toLowerCase();
    inputSpan.textContent = ''; // Clear input field after submitting

    // Check if command exists and execute the corresponding function
    if (commands.hasOwnProperty(userInput)) {
      commands[userInput]();
    } else {
      displayOutput(`Command not found: ${userInput}`, 'error'); // Use 'error' class for red text
    }
  }
});
