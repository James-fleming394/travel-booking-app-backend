const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const db = require('./db');
const authRoute = require('./routes/auth.js')

const app = express();
const PORT = process.env.PORT || 6001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
// app.use(express.static(`${__dirname}/client/build`));


app.use('/api/auth', authRoute);

db.on('error', console.error.bind(console, 'MongoDB Connection Error'));

// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
// });

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});