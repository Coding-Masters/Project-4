const express = require('express');
const mainRouter = express.Router();
const {add}=require('./../controllers/main-controller');
mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});
mainRouter.post("/add",add);

module.exports = mainRouter;