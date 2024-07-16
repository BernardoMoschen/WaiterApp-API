import { Router } from "express";
import { CategoryControllerInstance } from "./app/Controllers/CategoriesController/CategoriesController";
import { ProductsControllerInstance } from "./app/Controllers/ProductsController/ProductsController";
import { OrderControllerInstance } from "./app/Controllers/OrderController/OrderController";

export const router = Router();

router.get("/categories", CategoryControllerInstance.index);
router.get("/categories/:categoryId", CategoryControllerInstance.show);
router.post("/categories", CategoryControllerInstance.store);
router.patch("/categories/:categoryId", CategoryControllerInstance.store);

router.get("/products", ProductsControllerInstance.index);
router.get("/products/:productId", ProductsControllerInstance.show);
router.post("/products", ProductsControllerInstance.store);
router.patch("/products/:productId", ProductsControllerInstance.update);

router.get("/orders", OrderControllerInstance.index);
router.get("/orders/:orderId", OrderControllerInstance.show);
router.post("/orders", OrderControllerInstance.store);
router.patch("/orders/:orderId", OrderControllerInstance.update);
// router.delete("/orders/:orderId", (req, res) => {
//     res.send("Ok");
// });



