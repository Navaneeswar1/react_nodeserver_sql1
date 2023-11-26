const express=require('express');

const cors=require('cors');
const router=require('./router');

const bodyParser=require('body-parser');

const server=express();

server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

server.use(router);


server.listen(3100,(error)=>{
    if(error) console.log(error);
    else console.log("server is running");

}
);











