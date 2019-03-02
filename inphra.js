// inphra.js

const exec = require('child_process').exec
const helpers = require('./helpers')
const config = require('./config')

const command = helpers.getCommand()
const project = helpers.getProject()

const run = cmds => {
  const cmd = cmds.shift()
  const proc = exec(cmd.command, cmd.options, (err, stdout, stderr) => {
    helpers.check(err)
    console.log(stdout)
    if (cmds.length > 0) {
      run(cmds)
    }
  })
  proc.on('error', (error) => {
    console.log(`\n${cmd}\nERROR: ${error}\n`)
  })
  proc.on('exit', (code) => {
    console.log(`\nCommand: ${cmd.command}\nOptions: ${cmd.options}\nExit code: ${code})\n`)
  })
}

if (command === 'express') {
  run(config.generateExpressCommands(project))
} else if (command === 'chatbot') {
  run(config.generateChatbotCommands(project))
}
