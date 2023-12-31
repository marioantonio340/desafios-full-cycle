const express = require('express');
const router = require('./router');
const app = express();

const port = 3333 || process.env.PORT;

app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})