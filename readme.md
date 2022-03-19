# 🎃 SQL Injection Demo

## Watch the Video First!

Video Link: https://www.youtube.com/watch?v=wSOlJ_duQU4&t=110s \
In this video, I covered what SQL is, some basic commands of MySQL, how to perform SQL injection to log in as a user, and how to use UINON attack (a branch of SQL injection) to access sensitive data 🎃! At the end of the video, I also went over how to prevent SQL injection to protect your database! Just like always, this video is for educational purposes. If you do any illegal stuff you will get arrested 🚓!

## Instalation

Install MySQL:

- https://dev.mysql.com/downloads/mysql/

Clone the Repository:

```
git clone git@github.com:chi-wei-lien/sql-injection.git
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
CREATE TABLE Students (
    studentID int,
	FirstName varchar(255),
    LastName varchar(255),
	University Name(255)
);
```

Insert some student data like this

```
INSERT INTO Students VALUES (3124, "Wilson", "Lien", "Cool University");
```

Create another table called Users

```
CREATE TABLE Users (
	username varchar(255),
    password varchar(255)
);
```

Insert some users data like this

```
INSERT INTO Users VALUES ("wilson", "1234@cool");
```

Run the demo web!

```
node index.js
```

If you have nodemon installed, you can also run

```
nodemon index.js
```

Go to "http://localhost:3000/" in your browser

## 📚 EXTRA RESOURCES

- Where I learned union attack: https://portswigger.net/web-security/sql-injection/union-attacks
- MySQL injection cheat sheet: https://pentestmonkey.net/cheat-sheet/sql-injection/mysql-sql-injection-cheat-sheet
- SQL injection cheat sheet: https://www.invicti.com/blog/web-security/sql-injection-cheat-sheet/
- How to bypass some common filter: https://null-byte.wonderhowto.com/how-to/sql-injection-101-avoid-detection-bypass-defenses-0184918/
- Where to practice SQL injection | PicoCTF: https://play.picoctf.org/ search Web Gauntlet, there are three level!

## 😃 WHO AM I:

I’m Wilson, a college freshman interested in making videos on Youtube and cybersecurity. I’m trying to upload a video every week that is related to cybersecurity to help people get started with this field. To be honest, I’m not at all an expert in this field, but I enjoy learning while sharing my knowledge! If you think I said anything wrong in my videos feel free to comment down below!

## 📞 CONTACT:

- Website: https://loophole.engineer/
- Instagram: https://www.instagram.com/willy_3124/
- Github: https://github.com/chi-wei-lien/
- LinkedIn: https://www.linkedin.com/in/chi-wei-lien
