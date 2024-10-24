const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer");
const cors = require('cors');
const path=require("path")

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/images",express.static(path.join(__dirname,"/images")))

const URI = process.env.MONGO_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful");
    } catch (error) {
        console.log(error, "Not connection")
    }
}

connectDb();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
        // cb(null, "hello.jpeg");
    }
})

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute)


app.listen("5000", () => {
    console.log("Backend is running")
})




