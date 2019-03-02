// helpers.js

const fs = require('fs')

const check = err => {
  if (err) {
    console.error(err)
  }
}

const validatedProject = (project, count) => {
  // Null validation
  if (!project) {
    return validatedProject('boiled-plates', count)
  }
  // Existing directory validation
  if (fs.existsSync(`${project}/`)) {
    count++
    return validatedProject(`${project}-${count}`, count)
  }
  return project
}

const getCommand = () => {
  const command = process.argv[2]
  const validCommands = [ 'express', 'chatbot' ]
  if (validCommands.indexOf(command) < 0) {
    throw `Invalid command: ${command}\n
      Supported commands: ${validCommands}`
  } else {
    return command
  }
}

const getProject = () => {
  return validatedProject(process.argv[3], 0)
}

module.exports = {
  check,
  validatedProject,
  getCommand,
  getProject
}
