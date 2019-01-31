// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// READY?! Let's go!


// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running in ${process.env.NODE_ENV} → PORT ${server.address().port}`);
});
