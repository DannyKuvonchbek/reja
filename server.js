const http = require ("http");
const mongodb = require ("mongodb");

let db;
const connectionString = "mongodb://atlas-sql-69ed9d7f82298cbf7d69b8bf-ipi3pi.a.query.mongodb.net/Reja?ssl=true&authSource=admin";

mongodb.connect(connectionString, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, client)=>{
    if (err) console.log("ERROR on connection MongoDB");
    else {
    console.log("MongoDB connected successfully"); 
    //console.log(client);   
    const app = require ("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`

        );
      });
    }   
  }
);



