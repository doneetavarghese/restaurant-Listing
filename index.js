// import jsson-server
const jsonServer = require('json-server')

// create a server application using jsonserver
const restServer = jsonServer.create()

// set up path for db.json
const router = jsonServer.router('db.json')

// return middle ware 
const middleware= jsonServer.defaults()

// set up a port number
const port = 3001

// use in restserver
restServer.use(middleware)
restServer.use(router)

// to run server
restServer.listen(port,()=>{
    console.log("Restaurent server listening on port" + port);
})