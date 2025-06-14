Steps 
1-> npm init -y
2-> install packages (express , mongoose , bcrypt , jsonwebtoken , cors , .dotenv , express-validdator)
3-> create app.js and require all the packages 
4-> create server.js and create a http server 
5-> create a db and connect it
6-> create a function ConnectTODB in the db where all the logics should be written and call the function in the  app.js
7-> create models
8-> create a usermodel with userSchema consisting of fullname , email , password , socketid and methods to generatetoken , hashPassword , ComaparePassword .
9-> create routes folder and create a user route which can also validate the req like firstname , email and password. the validator only check the req fields. all the controlling part will be conducted by the controller.(the {data} is required from the express-validator).
10-> create controllers for user route.
11-> create services for usermodel to perform some check and create a user and then the controller will require it for further work
12-> now require the userservice and userModel in the user controller and also require the validationResult from express-validator