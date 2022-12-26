const createReadmeTemplate = (answers) => {
    let template = 
`# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is covered under the following: ${answers.license}

## Contributing

${answers.contributing}

## Tests

${answers.test}

## Questions

Direct all questions to: ${answers.email}

Github User Name: ${answers.username}

Github Profile URL: https://github.com/${answers.username}

`
    return template; 
}

export {createReadmeTemplate}