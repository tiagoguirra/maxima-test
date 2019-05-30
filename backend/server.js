const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const app = express();
const port = process.env.APP_PORT || 8000;
const host = process.env.APP_HOST || 'localhost';
const mongoose = require('mongoose')
const globalMiddlewares = require('./src/midleware/global')
// require('dotenv').config({ path: path.resolve(__dirname, '.env') })
///Set up mongoose connection
mongoose.connect(process.env.APP_MONGOOSE_HOST, { useNewUrlParser: true,dbName:process.env.APP_MONGOOSE_DATABASE });
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors settings
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

//import global middlewares
app.use(globalMiddlewares)

//import router agent
app.use(routes)

//error handling
app.use(errorHandler);

//error handle
function errorHandler(err, req, res, next) {
    if (process.env.NODE_ENV === 'development') {
        //development error handle, will print stacktrace
        console.error(err.stack)
        res.status(err.status || 500).json({
            'success': false,
            'message': err.message,
            'error': err
        });
    } else {
        //production error handle, no stacktrace print
        res.status(err.status || 500).json({
            'success': false,
            'message': err.message,
            'error': {}
        });
    }
}

//listen app
app.listen(port,host, function () {
    console.log('Maxima test run at',process.env.NODE_ENV)
    console.log('Run at host ', host)
    console.log('Run at port ', port)
});

module.exports = app