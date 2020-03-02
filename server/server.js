import express from 'express';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import passport from 'passport';
import logger from 'morgan';
import mongoose from 'mongoose';

const path = require('path');
import config from './config';
var compression = require('compression');
// Create app instance
const app = express();
app.use(compression());
const router = express.Router();
// Connect to DB
mongoose.connect(config.mongoURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set up app
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(logger('dev'));

// Link routes
import auth from './routes/auth.route'

//app.use('/api', stores);
app.use('/api/auth', auth);

// Serve static assets
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// Start app
app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Server is running on port: ${config.port}! Build something amazing!`);
  }
});
