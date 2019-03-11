# Scalable API Template for Node.js Applications

This repo contains code for user management and ACL

## How to RUN

- There are NPM scripts to help your development enviroment easy

## NPM Scripts

- Use `npm run dev` to start the app in development mode
- Go to `http://localhost:PORT_NUMBER` to see the app running

## Code Structure

This codebase follows MVC pattern with few additional layers.

### List of layers

The codebase has following flow of different layers:

- Routes
  - Controllers
    - Request Validators
    - Service Layer
    - Dispatch Response

### Routes

- Routes are the top level and are created using `Express.js` routes
- They internally calls the `controllers`
- Every route has it's own `controller`

### Controllers

- Controller is invoked by it's `route`
- Controllers at it's core has following responsiblities:
  - Validation of the client request
  - Extract the request entities (body, params or query)
  - Invokes different services
  - Returns the final response back to the client

### Request Validators

- This layer is a set of custom functions in a separate file
- They are used to validate the client request be it the body, params or query of the request
- If the client request is not desireable, it returns the errors back to the client

### Service Layers

- This layer primarily interacts with the Database
- It is reponsible only for getting the required data from the Database and return it to the controller
- **Note**: All the business logic and query filteration should take place inside the controller

## Libraries Used

- Express.js
- Express Validator
- Mongoose

## HTTP Verbs Used

- **GET** : Use this to fetch data from the DB to client
- **POST**: Use this when creating new record in DB
- **PATCH**: Use this when you partially update any entity
- **DELETE**: Use this when you are performing delete operation

## HTTP Status Code Used

- 200 - Used when you get data successfully
- 201 - Used when your data created successfully

- 400 - Used when there is bad request from the client
- 401 - Used when user is not authenticated
- 403 - Used when user is authenticated but do not have permissions to access resource
- 404 - Used when data not found
- 422 - Used when payload key(s) is valid but the data in the key(s) are unprocessable
- 500 - Used when server encounter unexpected condition
