let mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('connected'))
    .catch((err) => console.log('MongoDB connect error', err));
