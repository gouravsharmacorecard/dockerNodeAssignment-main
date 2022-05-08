const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hi There Gourav Sharma');
});
app.listen(8080, () => {
    console.log('Listening on port 8080');
});
