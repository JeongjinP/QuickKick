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
        query = 'SELECT * FROM Login where id = ${username} and password = ${password}', function (error, results, fields) {
            if (results.length > 0) {
                bcrypt.compare(password, results[0].userchn, (err, result) => {
                    if (result === true) {
                        route.params.user = '${stdNum}';
                    }
                })
            }

        }
    }    

})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3306')
})