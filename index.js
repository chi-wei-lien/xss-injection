require('dotenv').config()

const express = require('express')
const session = require('express-session');
const app = express()
var mysql = require('mysql');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(session({
	secret: process.env.MY_SECRET,
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASS,
    database: "mydb"
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
		con.query("SELECT * FROM Students", await function (err, result, fields) {
      if (err) throw err;
      res.render('dashboard', {students: result, username: req.session.username});
    });
	} else {
		res.redirect('/');
	}
});

app.post('/dashboard', async (req, res) => {
  // var sql = "SELECT * FROM customers WHERE name = " + mysql.escape(req.body.name);
  var sql = `SELECT * FROM Students WHERE studentID = '${req.body.name}'`;

  console.log(sql);
  con.query(sql, await function (err, result, fields) {
    if (err) {
      console.log(err);
      return res.status(500).render('error_500');
    }
    console.log("result" + result);
    res.render('dashboard', {students: result});
  });
  
})

app.get('/error', async (req, res) => {
  res.render('error');
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })