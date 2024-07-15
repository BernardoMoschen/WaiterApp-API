import express from "express";
import mongoose from "mongoose";

mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
        console.log("🗄 - Connected to mongo");
        const app = express();
        const port = 3001;
        app.listen(port, () => {
            console.log(`🚀 - Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log("failed to connect to mongo"));


