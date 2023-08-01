const express = require("express");
const authRouter = require('./router/auth_router.js');
const hospitalRouter = require('./router/hospital_router.js');
const connectDatabase = require('./connect_database.js');

const port = 8000;

var cors = require('cors')
var app = express()

app.use(express.urlencoded({ extended: false, limit: "10mb" }));
app.use(cors());
app.use(express.json());
connectDatabase();
app.use('/auth', authRouter);
app.use('/hospital', hospitalRouter);

app.listen(port, () => {
  console.log('App is listening on port', port);
});
