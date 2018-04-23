const chalk = require('chalk');

exports.before = function (utils) {
  // before hook
  console.log(chalk.blue('Thinking about it…'))
}

exports.configure = [
  {
    name: 'name',
    message: 'What is the name of your project?'
  }, {
    name: 'description',
    message: 'Describe your project'
  }, {
    name: 'github_username',
    message: 'What is your github username?'
  }, {
    name: 'event_name',
    message: 'What is the name of your event?'
  }, {
    name: 'event_start',
    message: 'What date does your event start?'
  }, {
    name: 'event_end',
    message: 'What date does your event end?'
  }, {
    name: 'event_location',
    message: 'Where is your event located?'
  }
]

exports.beforeRender = function (utils, config) {
  // beforeRender hook
}

exports.after = function (utils, config) {
  // after hook
}
