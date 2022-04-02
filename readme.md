# 🎃 Cross Site Scripting(XSS) Demo

## Watch the Video First!

Video Link: https://www.youtube.com/watch?v=hIXzZVBy528 \
In this video I covered how to perform cross site scripting (XSS), which basically allows attackers to have full control over a vulnerable website 😈. Just like always, this video is for educational purposes. If you do any illegal stuff you will get arrested 🚓!

## Instalation

Install MySQL:

- https://dev.mysql.com/downloads/mysql/

Clone the Repository:

```
git clone https://github.com/chi-wei-lien/xss-injection
```

Install packages

```
npm install
```

Create a .env file in the <b>outside</b> of "views" and it should look like this \
.env

```
DB_PASS=[your database password]
PORT=3000
MY_SECRET=[you can create any secret you want - this is for express session]
```

Login into your MySQL in a separate tab on your terminal (I prefer iterm)

```
mysql -u root -p;
```

Create a table called students (varchar(255) means length with 255 characters)

```
CREATE TABLE Users (
    password varchar(255),
	username varchar(255)
);
```

Insert some user data like this

```
INSERT INTO Users VALUES ("wilson", "1234@cool");
INSERT INTO Users VALUES ("hacker", "1234");
```

Create another table called Admin

```
CREATE TABLE Admin (
	username varchar(255),
    password varchar(255)
);
```

Insert some users data like this

```
INSERT INTO Admin VALUES ("wilson", "1234@cool");
```

Create another table called Pic

```
CREATE TABLE Pic (
	pic varchar(255),
    subtitle varchar(255),
    title varchar(255)
);
```

Run the vulnerable web!

```
cd vulnerable_web
npm start
```

Go to "http://localhost:3000/" in your browser

Run the cookie stealer!

```
cd cookie_stealer
node index.js
```

## 📚 EXTRA RESOURCES (Where to test Your XSS skills!)

- Google XSS Game: https://xss-game.appspot.com/
- alert(1) to win: https://alf.nu/alert1?world=alert&level=alert0
- prompt(1) to win :http://prompt.ml/0

## 😃 WHO AM I:

I’m Wilson, a college freshman interested in making videos on Youtube and cybersecurity. I’m trying to upload a video every week that is related to cybersecurity to help people get started with this field. To be honest, I’m not at all an expert in this field, but I enjoy learning while sharing my knowledge! If you think I said anything wrong in my videos feel free to comment down below!

## 📞 CONTACT:

- Website: https://loophole.engineer/
- Instagram: https://www.instagram.com/willy_3124/
- Github: https://github.com/chi-wei-lien/
- LinkedIn: https://www.linkedin.com/in/chi-wei-lien
