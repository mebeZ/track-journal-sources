const env = require('dotenv').config();
const dbUser = process.env.DBUSER;
const dbPassword = process.env.DBPASSWORD;
const dbName = process.env.DBNAME;
const discardAfterXDays = 14;

const URI = "mongodb+srv://${dbUser}:${dbPassword}@specsources.bhhoi.mongodb.net/${dbName}?retryWrites=true&w=majority";

module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays,
};