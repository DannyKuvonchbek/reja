const http = require ("http");
const mongodb = require ("mongodb");


const connectionString = "mongodb+srv://DANNY_MIT:GTgTJ9e16NKt0ISD@cluster0.sc6tsmn.mongodb.net/Reja?appName=Cluster0";

mongodb.connect(connectionString, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, client)=>{
    if (err) console.log("ERROR on connection MongoDB");
    else {
    console.log("MongoDB connected successfully"); 
    module.exports = client;
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





