// function to generate markdown for README
function generateMarkdown(userResponse) {
console.log(userResponse);

  return `
  # ${userResponse.title}\n
  
  ## Description:\n
  ![License](https://img.shields.io/badge/License-${userResponse.license}-blue.svg "License Badge")

    ${userResponse.description}\n

  # Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:\n
  ${userResponse.installation}\n

  ## Usage:\n
  ${userResponse.usage}\n

  ## Credits:\n
  ${userResponse.credits}\n

  ## License:\n
  For more information about licenses, please visit:

  [License](https://opensource.org/licenses/${userResponse.license})\n

  ## Contributing:\n
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
  
  ${userResponse.contributing}\n


  ## Tests:\n
  ${userResponse.tests}\n
  
  ## Questions:\n
  For any questions you may have, please visit my Github profile:
  - [Github Profile](https://github.com/${userResponse.github})

  If you have any additional questions, feel free to email them to me:
  - [Email](${userResponse.email})\n
`;
}

module.exports = generateMarkdown;