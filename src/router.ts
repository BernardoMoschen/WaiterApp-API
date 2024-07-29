import { Router } from "express";
import { CategoryControllerInstance } from "./app/Controllers/CategoriesController/CategoriesController";
import { ProductsControllerInstance } from "./app/Controllers/ProductsController/ProductsController";
import { OrderControllerInstance } from "./app/Controllers/OrderController/OrderController";
import multer from "multer";
import path from "node:path";

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination: (_req, _file, callback) => {
            callback(null, path.resolve(__dirname, "..", "uploads"));
        },
        filename: (_req, file, callback) => {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

router.get("/categories", CategoryControllerInstance.index);
router.get("/categories/:categoryId", CategoryControllerInstance.show);
router.get(
    "/categories/products/:categoryId",
    CategoryControllerInstance.listProductsByCategory
);
router.post("/categories", CategoryControllerInstance.store);
router.patch("/categories/:categoryId", CategoryControllerInstance.update);
router.delete("/categories/:categoryId", CategoryControllerInstance.delete);

router.get("/products", ProductsControllerInstance.index);
router.get("/products/:productId", ProductsControllerInstance.show);
router.post(
    "/products",
    upload.single("image"),
    ProductsControllerInstance.store
);
router.patch("/products/:productId", ProductsControllerInstance.update);

router.get("/orders", OrderControllerInstance.index);
router.get("/orders/:orderId", OrderControllerInstance.show);
router.post("/orders", OrderControllerInstance.store);
router.patch("/orders/:orderId", OrderControllerInstance.update);
// router.delete("/orders/:orderId", (req, res) => {
//     res.send("Ok");
// });



