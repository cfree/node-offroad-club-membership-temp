/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2);

// Some details about the site
exports.siteName = `4-Players of Colorado`;

exports.menu = [
  { slug: '/', title: 'Home', icon: 'store' },
  { slug: '/register', title: 'Register', icon: 'tag' },
];
