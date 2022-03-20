const express = require("express");
const cors = require("cors");
const PORT = 5000;

const app = express();

//middleware
app.use(cors());
//to pass data
app.use(express.json());

app.get('/', async (req, res) => {
    res.json("Pet P1")
})

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});