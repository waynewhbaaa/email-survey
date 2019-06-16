// Decide the status of the deployment
if (process.env.NODE_ENV === 'production') {
  // Production site
  module.exports = require('./prod');
}
else{
  // Development site
  module.exports = require('./dev');
}
