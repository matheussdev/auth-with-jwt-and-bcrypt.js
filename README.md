# 👥 Authentication with JWT and Bcrypt.js

## 🛍️ API for authentication and authorization of users to register stores in E-commerce
<br>

<h4 align="center">
	🚧 Developing 🚀 🚧
</h4>

 💻 About
=================
    🔐 the project uses the JsonWebToken library to create an authentication token that is generated whenever a new user is created or when a user is logged in.

    🛡️ The Bcrypt.js library was also used to encrypt passwords created by users.

    This project was developed to study Node.js using the JavaScript language in the back end.
<hr><br>

 ⚙️ Features
=================
     ✅  New user registration (new store);
     ✅  Login with user authentication;;
     ✅  Token authorization for requests:
            ⭕ View confidential user information;
            ⭕ Edit user information;
            ⭕ Delete user.
<hr><br>

🚀 How it works
=================
## requirements
Before you begin, you will need to have the following tools installed on your machine: [Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/). In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)<br>

### Runnig
~~~
# Clone this repository
$ git clone git@github.com:Matheusouz1/auth-ecommerce.git

# Access the project folder in the terminal/cmd
$ cd auth-ecommerce

# Install the dependencies
$ npm install 
or
$ yarn add

# connecting your database
$ export DATABASE_URL="your MongoDB link"

# Run the application in development mode with the nodemon
$ npm run dev 
or 
$ yarn dev

# The server will start at port:3333 - go to http://localhost:3333
~~~

<p align="center">
  <a href="https://github.com/Matheusouz1/auth-ecommerce/Insomnia_Requests" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>
<hr><br>

🚀 Tech Satck
=================
## The following tools were used in the construction of the project:

### Server ([node.js](https://nodejs.org/en/))
* [Express](https://expressjs.com/)
* [Cors](https://expressjs.com/en/resources/middleware/cors.html)
* [MongoDb](https://www.mongodb.com/1)
* [Mongoose](https://mongoosejs.com/)
* [Body-parser](https://www.npmjs.com/package/body-parser)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [JWT](https://www.npmjs.com/package/jsonwebtoken)
##### devDependencies
* [Nodemon](https://nodemon.io/)
> see the file [package.json](https://github.com/Matheusouz1/auth-ecommerce/blob/main/package.json)
<hr><br>

Author
=================
<a href="https://github.com/Matheusouz1">
<img style="border-radius: ;" src="https://avatars1.githubusercontent.com/u/57780476?s=460&u=3f6bc88b79779488cbb13264799f442b61e3a828&v=4" width="100px;" alt="Matheus souza"/>
<br />
<sub><b>Matheus Souza</b></sub></a> <a href="https://github.com/Matheusouz1/" title="Matheus souza"></a>
<br />
---

## License

This project is under the license [MIT](./LICENSE).

Made with love by Matheus Souza 👋🏽 [Get in Touch!](Https://www.linkedin.com/in/matheus-souza-santos-392677195)

---