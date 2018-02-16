# YATA
This is Yet Another Todo App...

The repo was inspired by a [Sitepoint.com](https://www.sitepoint.com) article written by [@blizzerand](https://github.com/blizzerand) entitled [MEAN Stack: Build an App with Angular 2+ and the Angular CLI](https://www.sitepoint.com/mean-stack-angular-2-angular-cli/). The aim of this repo is to build on that work by expanding the API slightly, and then use a [VueJS](https://vuejs.org/) front-end to consume the data generated.

At time of writing this README.md (16/02/2018), the API is built and functional, but the VueJS front-end is still a work in progress.

## Requirements
 - [NodeJS](https://nodejs.org/)
 - [MongoDB](https://www.mongodb.com/)

## Installation Steps
### API
From the CLI, execute the following in the root folder
```cli
$ npm install
```

To start the API run MongoDB with...
```cli
mongod
```

and in a separate tab, run
```cli
npm start
```

Assuming all is working correctly, you should now be able to access the available end-points using your preferred REST client using the following

 - GET http://localhost:3000/bucketlist - all list items
 - GET http://localhost:3000/bucketlist/:id - single list item by ID
 - POST http://localhost:3000/bucketlist - create new list item
 - UPDATE http://localhost:3000/bucketlist/:id - update list item by ID
 - DELETE http://localhost:3000/bucketlist/:id - delete list item by ID


### Front-End
