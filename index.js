const connectToMongo = require("./db");
const express = require("express");
const randmArr = require("./manager/randmArr");

connectToMongo();
const app = express();
const port = 3000;

app.use(express.json());

// routes
app.get("/users/game/:level_number/:userid", async (req, res) => {
  try {
    let response = await randmArr(req.params.level_number);

    if (response.success) {
      res.status(200).json({ success: response.success, levelArray: response.levArray });
    }
    else{
      res.status(400).json({ success: response.success, levelArray: response.levArray });
    }
    
  } catch (error) {
    console.error(error.msg);
    res.status(500).send("Internal error occured");
  }
});

app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`);
});
