import { Router } from "express";
import { CategoryControllerInstance } from "./app/Controllers/CategoriesController/CategoriesController";
import { ProductsControllerInstance } from "./app/Controllers/ProductsController/ProductsController";

export const router = Router();

router.get("/categories", CategoryControllerInstance.index);
router.post("/categories", CategoryControllerInstance.store);
// router.get("/categories/:categoryId", (req, res) => {
//     res.send("Ok");
// });
// router.get("/categories/:categoryId", (req, res) => {
//     res.send("Ok");
// });

router.get("/products", ProductsControllerInstance.index);
// router.post("/categories", ProductsControllerInstance.store);






// router.get("/orders", (req, res) => {
//     res.send("Ok");
// });

// router.post("/orders", (req, res) => {
//     res.send("Ok");
// });

// router.patch("/orders/:orderId", (req, res) => {
//     res.send("Ok");
// });

// router.delete("/orders/:orderId", (req, res) => {
//     res.send("Ok");
// });
