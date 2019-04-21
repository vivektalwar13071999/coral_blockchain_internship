# coral_blockchain_internship
A simple HTML web form for User Authentication and Registration


# Problem Statement 
1. Create a Web form which will takes input from user. Below are the form fields.
a) User Name
b) Password
c) Email Id
d) Phone Number
* Note: Use input field validation
2. Create a REST API which will take request from the HTML form and insert the data into MySQL
database along with the current Date and Time
3. Your API should insert the record if it doesn‘t exist, else update the previous record
4. Create a search bar which will take email id as input and show the respective record if exist,
else show error with appropriate message
5. MySQL Table struct and connection details;
# Table Schema:

* userName varchar(25) NOT Null,
* emailId varchar(50) primary key,
* phoneNo varchar(10) Not Null,
* password varchar(50) Not Null,
* dateTime Timestamp

* Host Name: db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com
* Port: 3306
* User Name: dummyUser
* Password: dummyUser01
* Db Name: db_intern
* Table Name: userData




# Database Creation

In terminal write ``` mysql -h db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com -P 3306 -u dummyUser -p ``` 
Enter the password
``` dummyUser01```
and then add the table to the database named ```db_intern```
```bash
CREATE TABLE `users`(
    `id` int(11) NOT NULL AUTO_INCREMENT, 
    `name` varchar(255) NOT NULL, 
    `email` varchar(255) NOT NULL, 
    `password` varchar(255) NOT NULL,
    `number` varchar(255) NOT NULL,
    `created_at` datetime NOT NULL, 
    `updated_at` datetime NOT NULL, 
    PRIMARY KEY (`id`)) 
ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1


```
## Testing the code
Before doing the necessary installation steps clone the github repo in the home folder ```git clone https://github.com/vivektalwar13071999/coral_blockchain_internship``` 
## Installation

Use the nodejs package manager [npm](https://www.npmjs.com/get-npm) to install the required node-modules.

```bash
npm install express express-fileupload body-parser mysql ejs req-flash cryptr express-session --save
```
For global installation of the package on PC.
```bash
npm install nodemon -g
```

## Creating package.json file for Dependency installations
```bash
npm init

```

```bash
{
  "name": "login",
  "version": "1.0.0",
  "description": "login authentication",
  "main": "index.js",
  "dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.14.1",
    "jsonwebtoken": "^7.3.0",
    "mysql": "^2.13.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
## For running the index.js file on http://localhost:3306/
``` bash
cd coral_blockchain_internship

node index.js

``` 
Once the database is connected and the application is in running mode go to the browser and type  
``` http://localhost:3306/``` 
Enter the necessary details and click on the submit button.

A JSON formatted file will appear with ``` message : "user registered sucessfully"``` 

To verify the email address and the password type in the browser
```http://localhost:3306/login.html```

Enter the username and the password with which you registered and an another JSON formatted file will appear which will show whether the email id and password matched with the registered one.




## Search Functionality

To implement the search functionality ```typeahead.js``` library is used. It is fast and fully-featured auto-complete library provided by Twitter for building faster typeaheads.

* Note : The code for search is not working properly, hence the search functionality is incomplete.


## References
[Coding-Karma](http://coding-karma.com/2017/08/12/creating-login-registration-using-nodejs-mysql/)


## What is REST and why it is so important for modern web-development?
Representational State Transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, termed RESTful Web services (RWS), provide interoperability between computer systems on the Internet. RESTful Web services allow the requesting systems to access and manipulate textual representations of Web resources by using a uniform and predefined set of stateless operations. 

In a RESTful Web service, requests made to a resource's URI will elicit a response with a payload formatted in HTML, XML, JSON, or some other format. The response can confirm that some alteration has been made to the stored resource, and the response can provide hypertext links to other related resources or collections of resources. When HTTP is used, as is most common, the operations (HTTP methods) available are GET, HEAD, POST, PUT, PATCH, DELETE, CONNECT, OPTIONS and TRACE.
