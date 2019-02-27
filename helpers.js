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

module.exports = {
  check,
  validatedProject
}
