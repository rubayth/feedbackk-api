var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'rubayth' }, function(err, tunnel) {
  console.log('LT running')
});