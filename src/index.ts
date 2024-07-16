import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
        console.log("🗄 - Connected to mongo");
        const app = express();
        const port = 3001;
        app.listen(port, () => {
            console.log(`🚀 - Server is running on http://localhost:${port}`);
        });
        app.use(express.json());
        app.use(router);
    })
    .catch(() => console.log("Failed to connect to mongo"));


