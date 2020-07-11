
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const welcomeRouter = require('./routes/welcome.router')
const iconsRouter = require('./routes/icons.router')
const homeRouter = require('./routes/home.router')
const entryRouter = require('./routes/entry.router')
const entryActivityRouter = require('./routes/entryActivity.router')
const lastEntryRouter= require('./routes/lastEntry.router')
 const chosenIconsRouter=require('./routes/chosenIcons.router')
const lineChartRouter = require('./routes/lineChart.router')
const pieChartRouter = require('./routes/pieChart.router');
const editRouter = require('./routes/edit.router')
const pictureRouter = require('./routes/picture.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/welcome',welcomeRouter);
app.use('/api/icons',iconsRouter);
app.use('/api/home', homeRouter);
app.use('/api/entry', entryRouter);
app.use('/api/entryActivity',entryActivityRouter);
app.use('/api/lastEntry',lastEntryRouter);
 app.use('/api/chosen', chosenIconsRouter)
app.use('/api/linechart',lineChartRouter);
app.use('/api/piechart', pieChartRouter);
app.use('/api/entryedit', editRouter);
app.use('/api/picture',pictureRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
