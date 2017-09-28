Using an express server, get mongo and mongoose running with a mongo database server, like we did earlier today (Wed. Sept 27). The mongoose schema will be a movie star:
```javascript
  {
    name: {name}
    dob: {dob}
    starredIn:{a movie he/she acted in}
   }
  ```
  Build a webpage that lists movie stars has his/her image as the background and display the following information: "{Name}, who's {age} starred in: {a movie he/she acted in}" in big letters at the top. Feel free to use jquery. Put a bootstrap nav bar at the top. Some notes: You'll need to make a new database - all you need to do is change the 
  ```javascript
    var mongodbUri = 'mongodb://localhost/names';
```
located in your server.js file to a different url (something like mongod://localhost/celebrity )
