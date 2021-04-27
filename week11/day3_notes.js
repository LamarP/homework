//Auth via api
//

//User sees a form. signup i.e.
//input gets packaged up into a json object and sent from frontend to backend as POST request to /users
//at this point we leave the front end and are in rails backend.


//First it hits our rails router, because it's a post request to /users, the rails router know to instantiate
//a new users controller and call create on that controller and passes in the new users information,
//at this point the controller instantiates a new user model using that info and attempt to save it to the database
//here validations are checked i.e. username is valid/invalid.
//if it passes the validations it will be saved to the database
//the data base will set an id property on that model object 
//our controller responds to our front end with a new current user object
//a json object {id: , name:}

//Frontend Auth
//API UTILS
//Storing current_user 
//will be stored in the current state
//session: {currentUser:, errors: [] }
//errors are stored in an array
//current user staarts out as null or undefined.
//current user will have user id

//Welcome page
//if (currentUser)
//<h2> currentUser.name,</h2>
//else
//<h2><h/2>

