const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const port = 3000;
const app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const movieRouter = require('./routes/movies');

app.use("/movies", movieRouter);

app.listen(port, () => {
    console.log(`now listening to port: ${port}`)
});