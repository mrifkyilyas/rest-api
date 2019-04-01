# rest-api

| Route           | HTTP          | Description  |
| --------------- |:-------------:| -------------:|
| /api/users      | GET           | get all the users info (admin)  |
| /api/users/:id  | GET           |   get a single user info (admin & login user) |
| /api/users      | POST          |    create a user (admin)  |
| /api/users/:id  | DELETE        |    delete a user (admin) |
| /api/users/:id  | PUT           |    update a user with new info (admin & login user) |




### USAGE
```
$npm init
$npm install sequelize pg express
$sequelize init
$sequelize db:create
$sequelize db:migrate
$ npm run dev 





##heroku deploy url
https://blueberry-cake-58867.herokuapp.com/


