var mysql      = require('mysql');
var connection = mysql.createConnection({
      host     : 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
      user     : 'dummyUser',
      password : 'dummyUser01',
      database : 'db_intern'
  
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection; 


