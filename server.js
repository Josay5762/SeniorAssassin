const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/javascripts/:resource', function (req, res) {
    res.sendFile(__dirname + '/public/javascripts/' + req.params.resource);
});

app.listen(port, () => {
    console.log(`server started on port: ${port}`)
});