import express from 'express';
const app = express();
import addAccount from './routes/add-account.js';

app.use(express.json());

app.use('/addAccount', addAccount);

app.use(function (req, res) {
    res.status(404).send("Not Found")
});

const port = 8080;
app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});