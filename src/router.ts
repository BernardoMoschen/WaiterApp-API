import { Router } from "express";

export const router = Router();

router.get("/categories", (req, res) => {
    res.send("Ok");
});

router.post("/categories", (req, res) => {
    res.send("Ok");
});

router.get("/products", (req, res) => {
    res.send("Ok");
});

router.get("/categories/:categoryId", (req, res) => {
    res.send("Ok");
});

router.get("/orders", (req, res) => {
    res.send("Ok");
});

router.post("/orders", (req, res) => {
    res.send("Ok");
});

router.patch("/orders/:orderId", (req, res) => {
    res.send("Ok");
});

router.delete("/orders/:orderId", (req, res) => {
    res.send("Ok");
});
