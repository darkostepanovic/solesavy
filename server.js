const express = require('express');
const app = express();

app.use(express.static('dist', { extensions: ['html', 'htm']}));

app.get('/', (req, res) => {
    res.send('Works!');
});

app.listen(3000, () => console.log("Server listening on port 3000"))