// config.js

const boilerplates = {
  express: 'https://github.com/phrazzld/express-boilerplate.git',
  chatbot: 'https://github.com/phrazzld/adam.git'
}

const generateChatbotCommands = project => {
  const gitUrl = boilerplates.chatbot
  return [
    {
      command: `git clone ${gitUrl} ${project}`
    },
    {
      command: `rm -rf .git/`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/adam/${project}/g' package.json`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/adam/${project}/g' config.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/adam/${project}/g' cron.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/Adam/${project}/g' cron.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/adam/${project}/g' database.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/adam/${project}/g' dialogflowHelpers.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/adam/${project}/g' helpers.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/adam/${project}/g' twilio.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/Adam/${project}/g' twilio.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/ADAM/${project}/g' twilio.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/Adam/${project}/g' README.md`,
      options: { cwd: `${project}` }
    },
    {
      command: `npm install`,
      options: { cwd: `${project}` }
    }
  ]
}



const generateExpressCommands = project => {
  const gitUrl = boilerplates.express
  return [
    {
      command: `git clone ${gitUrl} ${project}`
    },
    {
      command: `rm -rf .git/`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/express-boilerplate/${project}/g' package.json`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/express-boilerplate/${project}/g' src/config.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/Express Boilerplate/${project}/g' README.md`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/Express Boilerplate/${project}/g' src/controllers/page.js`,
      options: { cwd: `${project}` }
    },
    {
      command: `sed -i '' 's/Express Boilerplate/${project}/g' src/views/header.ejs`,
      options: { cwd: `${project}` }
    },
    {
      command: `npm install`,
      options: { cwd: `${project}` }
    }
  ]
}

module.exports = {
  generateChatbotCommands,
  generateExpressCommands,
  boilerplates
}
