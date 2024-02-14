# E-Commerce Back End Using Sequelize

## Description

This repo contains a back-end server setup utilizing Sequelize routing to add Categories, Products, or Tags to a database. Building on the code base further with front-end input, or by using software such as Postman, users can get, add, and update data as they need to.

## Installation

To install the app and get it operable, first, the user must download the application's code from the github, navigate to the package.json in the application's folder, then open it up in their terminal. The user will need to have installed npm or a similar program to install the required packages and dependencies in the package.json file, by running the command "npm i" or "npm install".

Once the dependencies are installed into a node_modules folder, the user will then be required to create a .env file with the following values:

MYSQL_USER= *Your username here*
MYSQL_PASSWORD= *your password here*
MYSQL_DATABASE=ecommerce_db

Set these values equal to your MYSQL username, MYSQL password, and the database name, which the user should set to ecommerce_db. If you do not have mysql installed and have not created a username or password, do so, then put them into the .env file.

Now, the user needs to create the database, which can be done by navigating to the db folder, then selecting the schema.sql file. Log into your mysql account in a new terminal, then paste the code found in schema.sql into it.

Then, to get your server running, run the "start" or "watch" command in the package.json file. You will need the server running to send requests or update the database.

From here the user can begin adding their own data into the database, or run the command 'seed' found in the package.json file to populate an example database. If you wish to add your own custom data, please review the models folder and accompanying files as to the structure of your mysql additions.

## Usage

For a video breakdown of the application's routing in use, please visit the following link!

[Example Video](https://drive.google.com/file/d/1zHLNYTC4_IMdXPFcYLfGfPOrY5as0TCu/view)

Besides that, users can create Categories, add Products associated to a cateory, and add Tags to associate with products - just perform the correct routing request with the needed data - gets with no parameters return all of a type, but if you include an id you will receive a specific entry / updates require an id for the item you wish to change and the value you want to change / deletes require an id for the item you wish to remove.

## Credits

UC Berkely

## License

MIT License