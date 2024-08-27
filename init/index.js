const mongoose = require('mongoose');
const initData = require('./data.js');//requiring datas
const Listing = require('../models/listing.js');//requiring model

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(()=>{
    console.log('DB connection success.');
}).catch(err=>{
    console.log('DB connection fail.',err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

// async function to initialize DB
const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map( (obj)=> ({ 
        ...obj, owner:'66bafe971cf8969d7a3ba410'
    }));
    await Listing.insertMany(initData.data);
    console.log('Data was initialized');
};

// calling the async function
initDB();
