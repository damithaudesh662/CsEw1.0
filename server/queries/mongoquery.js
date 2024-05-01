const {MongoClient} = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://chamathj11:${process.env.MY_MONGODB_ACCESS_KEY}@cluster0.xbnqaje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a client to handle connections
const client = new MongoClient(uri);

const run = async ()=>{
    await client.connect();
    console.log("Successfully Connected to Mongo Server");
}

exports.checkUser = async (req, res) =>{
    const db = client.db('mental_health');
    const coll = db.collection('user_details');

    const email = req.body.email;
    const password = req.body.password;

    const query = {email: email};

    try{
        const document = await coll.findOne(query);
        if (document.password == password){
            res.send({correct: true});
        }else{
            res.send({correct: false});
        }

    } catch(err){
        console.error(err);
        res.status(500);
    }
}

run().catch(console.dir);
