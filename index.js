// index.js

const exec = require('child_process').exec

// Test the cloning device
const project = process.argv[2]
const boilerplate = 'phrazzld/express-boilerplate.git'
const gitAddr = `https://github.com/${boilerplate}`

const check = err => {
  if (err) {
    console.error(err)
  }
}

const clone = exec(`git clone ${gitAddr} ${project}`, (err, stdout, stderr) => {
  check(err)
  console.log(stdout)
  exec(`rm -rf ${project}/.git/ && cd ${project} && ls -la`, (err, stdout, stderr) => {
    check(err)
    console.log(stdout)
  })
})
clone.on('exit', (code) => {
  console.log(`\nExit code: ${code}\n`)
})
