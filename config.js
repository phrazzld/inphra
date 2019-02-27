// config.js

const generateCommands = (gitUrl, project) => {
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

const boilerplates = {
  express: 'https://github.com/phrazzld/express-boilerplate.git'
}

module.exports = {
  generateCommands,
  boilerplates
}
