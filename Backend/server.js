const path = require("path");
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const app=express();
const __dirname1=path.resolve();
mongoose
  .connect(process.env.MONGO_ATLAS_URI) 
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const cookieParser = require("cookie-parser");
const userRouter = require("./Routes/userRoutes");
const postRouter = require("./Routes/postRoutes");
const replyRouter = require("./Routes/replyRoute");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(userRouter);
app.use(postRouter);
app.use(replyRouter);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/Frontend/dist")));

  app.get("*" , (req,res)=>{
    res.sendFile(path.resolve(__dirname1, "Frontend",  "dist", "index.html"))
  });
}

app.listen(port, () => {
  console.log(`App is listening at port:${port}`);
});
