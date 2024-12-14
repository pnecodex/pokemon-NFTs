const mongoose = require("mongoose")
require("dotenv").config();

const connectDatabase = () => {
  mongoose.connect(
    process.env.DB_HOST || "mongodb://mypoke-nft:mydb123@cluster0-shard-00-00.vzcj5.mongodb.net:27017,cluster0-shard-00-01.vzcj5.mongodb.net:27017,cluster0-shard-00-02.vzcj5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xlcpfg-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    }).then((data) => {
      console.log('mongodb connected');
    }).catch((error) => {
      console.log(error.message);
    })

}
module.exports = connectDatabase;
