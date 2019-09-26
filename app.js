const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFoundRoute = require('./routes/not-found');

// middlewares fire in sequence, so the catchall should be last and non-routes shall be first
app.use(bodyParser.urlencoded({ extended: false }));
// serve static read access
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminRoutes);
app.use(notFoundRoute);

app.listen(3000);