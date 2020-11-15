const express = require('express');
const mainRouter = require('./routes/main-route');
const adminRouter = require("./routes/admin-route");
const cors = require('cors');
require('dotenv').config();

const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);
app.use("/admin",adminRouter)

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
