const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
var cors = require('cors');
const errorHandler = require('errorhandler');
// const MongoStore = require('connect-mongo')(null);
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const expressStatusMonitor = require('express-status-monitor');
const apiRoutes = require('./routes');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' });

/**
 * Create Express server.
 */
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: [ 'http://localhost:3000']
    }));
}

/**
 * Connect to MongoDB.
 */
const options = {
    autoReconnect: true,
    keepAlive: 1,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 0,
    useNewUrlParser: true
};

mongoose.connect(process.env.MONGODB_URI, options);

mongoose.connection.on('connected', () => {
    console.log('%s MongoDB is connected', chalk.green('✗'));
});
mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    mongoose.connection.close();
    //   process.exit(); 
});

/**
 * If the Node process ends, close the Mongoose connection 
 */
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

require('./models');


/**
 * Express configuration.
 */
console.log(process.env.OPENSHIFT_NODEJS_IP, "========process.env.OPENSHIFT_NODEJS_IP");
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.use(expressStatusMonitor());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));



const apiRouter = express.Router();
if (apiRoutes) {
    apiRouter.use('/api', apiRoutes);
}

app.get('/client', function (req, res) {
    console.log(process.env.PWD, "=======in path");
    res.sendFile(path.join(`${process.env.PWD}/dist`, 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})



app.use(apiRouter);


/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
} else {
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).send('Server Error');
    });
}

/**
 * Start Express server.
 */

app.listen(app.get('port'), () => {
    console.log('%s App is running at %s:%d in %s mode', chalk.green('✓'), app.get('host'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
}).on('error', (err) => {
    console.log(chalk.red(err));
})


module.exports = app;









// app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

