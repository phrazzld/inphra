// index.js

const exec = require('child_process').exec
const fs = require('fs')

// Test the cloning device
const boilerplate = 'phrazzld/express-boilerplate.git'
const gitAddr = `https://github.com/${boilerplate}`

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
const project = validatedProject(process.argv[2], 0)

const deploy = cmds => {
  const cmd = cmds.shift()
  const proc = exec(cmd, (err, stdout, stderr) => {
    check(err)
    console.log(stdout)
    if (cmds.length > 0) {
      deploy(cmds)
    }
  })
  proc.on('error', (error) => {
    console.log(`\n${cmd}\nERROR: ${error}\n`)
  })
  proc.on('exit', (code) => {
    console.log(`\n${cmd} (exit code ${code})\n`)
  })
}

const commands = [
  `git clone ${gitAddr} ${project}`,
  `rm -rf ${project}/.git/`,
  `sed -i '' 's/express-boilerplate/${project}/g' ${project}/package.json`,
  `sed -i '' 's/express-boilerplate/${project}/g' ${project}/src/config.js`,
  `sed -i '' 's/Express Boilerplate/${project}/g' ${project}/README.md`,
  `sed -i '' 's/Express Boilerplate/${project}/g' ${project}/src/controllers/page.js`,
  `sed -i '' 's/Express Boilerplate/${project}/g' ${project}/src/views/header.ejs`,
  `cd ${project} && npm install`
]

deploy(commands)
