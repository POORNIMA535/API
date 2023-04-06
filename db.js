const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'tasks',
    'root',
    '',{
        dialect:'mariadb',
        host:'localhost'
    }
);

const connectToDb = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Successfully connected to our db");
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {sequelize , connectToDb}