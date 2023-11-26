const Sequelize=require('sequelize');

const sequelize=new Sequelize("userinformation", "root", "root",{
    host:"localhost",
    port:3306,
    dialect:"mysql",

    

});

module.exports={ sequelize };

