const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
});

app.get('/mysong', function (req, res) {
  res.redirect(302, 'https://tranquil-hollows-12097.herokuapp.com');
});

app.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
