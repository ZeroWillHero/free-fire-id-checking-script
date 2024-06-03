const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const playerApi = require('./script/script');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/apiV1/player', playerApi);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    }
);

