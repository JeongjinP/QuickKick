const express = require('express');
const app = express();
const PORT = process.env.PORT || 3306;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: '1234',
    database: 'QuickKickDB' 
})

db.connect((err) => {
    if (err) {
        console.error('SQL connection ERROR: ', err);
    } else {
        console.log('SQL Connection Succeed');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/api/getUser', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password){
        query = 'SELECT * FROM Login where id = ${user}', function (error, results, fields) {
            if (results.length > 0) {
                    if (results === true) {
                        username = '${stdName}';
                    }
                }
            }

        }
})

app.listen(PORT, () => {
    console.log('Example app listening at http://localhost:3306')
})