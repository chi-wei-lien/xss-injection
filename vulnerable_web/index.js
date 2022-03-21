require('dotenv').config()

const express = require('express')
const session = require('express-session');
const app = express()
var mysql = require('mysql');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(session({
	secret: process.env.MY_SECRET,
  cookie: {
    // this is why you should never set this to false
    httpOnly: false,
    secure: false
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASS,
    database: "xss"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected!");
});

app.get('/', async (req, res) => {
  res.render('index');
});

app.post('/auth', async (req, res) => {
  var sql = "SELECT * FROM Users WHERE username = " + mysql.escape(req.body.username) + " AND password = " + mysql.escape(req.body.password);
  con.query(sql, await function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0) {
      req.session.loggedin = true;
      req.session.username = req.body.username;
      res.redirect('/dashboard');
    } else {
      console.log(sql);
      res.render('index', {message: "Password Incorrect"});
    }			
  });
});

app.get('/dashboard', async (req, res) => {
  if (req.session.loggedin) {
		con.query("SELECT * FROM Pic", await function (err, result, fields) {
      if (err) throw err;
      res.render('dashboard', {cards: result, username: req.session.username});
    });
	} else {
		res.redirect('/');
	}
});

app.post('/dashboard', async (req, res) => {
  if (req.session.loggedin) {
    var sql = "INSERT INTO Pic VALUES (" + mysql.escape(req.body.title) + ", " + 
              mysql.escape(req.body.subtitle) + ", " +  mysql.escape(req.body.pic) + ");";
    con.query(sql, await function (err, result, fields) {
      if (err) throw err;
      res.redirect('/dashboard');		
    });
	} else {
		res.redirect('/');
	}
});

app.get('/error', async (req, res) => {
  res.render('error');
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })