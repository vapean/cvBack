const mongoose = require('mongoose');

const urlMongo = 'mongodb://heroku_3mhbd3f5:eujeksrogopgl45c9aa5okks6g@ds237588.mlab.com:37588/heroku_3mhbd3f5';

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(urlMongo, config)