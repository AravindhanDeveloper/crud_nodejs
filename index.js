const express = require('express');
const app = express();

const mongoose = require("mongoose");
app.use(express.json());
 
const bookrouter = require('./router');
app.use("/book", bookrouter);

{
    const PORT = process.env.PORT || 6000;

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

}
mongoose.connect("mongodb://localhost:27017",{ useNewUrlParser: true , useUnifiedTopology: true },(err) => {
    if(!err)
    {
        console.log("db connected");
    }
})