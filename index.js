// Initialize the file system and inquirer modules
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');
const Choice = require('inquirer/lib/objects/choice');

const promptUser = () => {

  return inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description for your project.',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a description for your project!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide some installation instructions for your project.',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please provide instructions for your project's installation procedures!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should this project be used? Provide screenshots as needed.'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'provide any credits you need, such as yourself, collaborators, third-party assets and/or tutorials you followed.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'please select a license.',
    choices: [
      "MIT",
      "ISC",
      "Apache-2.0",
      "MPL-2.0"
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the rules for contributing to this project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What testing has been done on the project?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'what is your GitHub username?',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub Username!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email address?'
  },
  ])
    .then(userResponse => {
    const readMe = generateMarkdown(userResponse);
      return writeToFile(readMe)
    })
    .then(response => {
      console.log(response);
    }) 
    .catch(err => {
      console.log(err);
    });
};

// function to write README file
function writeToFile(userResponse) {
  // create a path to create the readme file
  const fileName = "./dist/readme.md";

  // Write the file
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, userResponse, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method 
      if (err) {
        reject(err);
        return;
      }
      //if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File Created!'
      });
    });
  });

}

// function to initialize program
function init() {
  // store all the user's answers in a variable
  const userResponse = promptUser();
}

// function call to initialize program
init();