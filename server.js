import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;

app.use(express.static('build'));


app.get('/hello', (req, res) => res.send('Hi'))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/build/index.html'));
    });

}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))