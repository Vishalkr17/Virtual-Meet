let redis = require("redis")
var options = {
    host: 'redis-11906.c262.us-east-1-3.ec2.cloud.redislabs.com',
    port: 11906,
    auth_pass: 'utDIyIqZIAeAxGXx4oH3awgHNKfAV4vD'
  };
  
  client = redis.createClient(options);

client.on("error",(error) =>{
    console.log(error);
});

module.exports = client;