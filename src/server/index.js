import app from './app.js';

app.listen(process.env.PORT || 7050, () => console.log(`Listening on port ${process.env.PORT || 7050}!`))
