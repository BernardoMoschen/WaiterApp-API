import path from "node:path";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
        console.log("🗄 - Connected to mongo");
        const app = express();
        const port = 3001;

        app.use(
            "/uploads",
            express.static(path.resolve(__dirname, "..", "uploads"))
        );
        app.use(express.json());
        app.use(router);
        app.use(
            (
                error: Error,
                _request: Request,
                response: Response,
                next: NextFunction
            ) => {
                console.log(error);
                return error ? response.sendStatus(500) : next();
            }
        );
        app.listen(port, () => {
            console.log(`🚀 - Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log("Failed to connect to mongo"));
