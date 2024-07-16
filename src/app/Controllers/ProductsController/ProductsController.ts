import { Request, Response } from "express";
import { ProductsRepositoryInstance } from "../../Repositories/ProductsRepository/ProductsRepository";

class ProductsController {
    async index(_req: Request, res: Response) {
        const products = await ProductsRepositoryInstance.findAll();
        res.json(products);
    }

    async store(req: Request, res: Response) {
        const { name, description, imagePath, price, ingredients, category } =
            req.body;

        const product = await ProductsRepositoryInstance.create({
            name,
            description,
            imagePath,
            price,
            ingredients,
            category,
        });
        res.json(product);
    }
}

// Singleton
export const ProductsControllerInstance = new ProductsController();
