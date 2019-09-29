const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
// routes // 
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFoundRoute = require('./routes/not-found');

// middlewares fire in sequence, so the catch-all should be last and non-routes shall be first
app.set('view engine', 'ejs'); // ejs used within views for data passing
app.set('views', 'views'); // default views, just being explicit

app.use(bodyParser.urlencoded({ extended: false })); // form parser
app.use(express.static(path.join(__dirname, 'public'))); // serve static read access

app.use(shopRoutes);
app.use('/admin', adminData.routes);
app.use(notFoundRoute);

app.listen(3000);