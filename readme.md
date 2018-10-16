# Basic User Sign Up Contact Form with password encryption

### Tech Stack
* React Frontend with Bootstrap 4 Form 
* Express Backend, serving a REST-API 
* bcrypt for password encryption (https://github.com/dcodeIO/bcrypt.js/blob/master/README.md) 
* node.js

This demo only shows a basic post request with user sign up information and then the
process of hashing the user's pw with bcrypt-hashing-algorithm. 

The hashed pw you would then store in your database and de-crypt if user wants to sign in. 


### How to use
Client and Server are tow entirely separate projects! I just packed them together in this repo for convenience.

Run the Client by navigating into the folder and running npm start.

Run the Server by navigating into the server folder and running node server.js.