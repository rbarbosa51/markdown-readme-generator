const createReadmeTemplate = (answers) => {
    let template = `# ${answers.title}

## ${answers.description}

`
    return template; 
}

export {createReadmeTemplate}