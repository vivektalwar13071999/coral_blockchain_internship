var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');

 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.get('/', function (req, res) {  
   //res.sendFile( __dirname + "/" + "base.html" );  
//})  
 
app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
}) 
 

 
/* route to handle login and registration and details page */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);

console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
//Configure application
app.set('views',__dirname + '/views'); //Set views directory
app.use(express.static(__dirname + '/JS'));
app.set('views engine', 'ejs'); //Set view engine to ejs
app.engine('html', require('ejs').renderFile);
app.use(function(req, res, next){ //Set no cache for the server
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
})
app.get('/', function(req, res){
  res.render('base.html');
});
app.get('/search',function(req,res){
connection.query('SELECT email from users where email like "%'+req.query.key+'%"',
function(err, rows, fields) {
if (err) throw err;
var data=[];
for(i=0;i<rows.length;i++)
{
data.push(rows[i].email);
}
res.end(JSON.stringify(data));
});
});




app.listen(3306);
