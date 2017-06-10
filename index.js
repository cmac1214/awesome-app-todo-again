const express =require('express');
const server =express();
const port =8080;
server.use(express.static(_dirname +'/public'));
server.get('/',(request, response) =>(
  response.sendFile('public/html/index.html', (root:_dirname));

))

server.listen(port, ()=> (
    console.log('Now listening on port', port);
  ));



  
