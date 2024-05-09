const express = require('express');
const connection = require('./config/dbconn')
const bodyParser = require('body-parser');
const auth = require('./routes/auth')


const app = express();
app.use(bodyParser.json());

connection();

app.use('/api/auth', auth)

      
// Start the server
app.listen(3000, () => {
        console.log('Server is running on port 3000');
});