import { Request, Response } from "express";
import { ProductsRepositoryInstance } from "../../Repositories/ProductsRepository/ProductsRepository";

class ProductsController {
    async index(_req: Request, res: Response) {
        const products = await ProductsRepositoryInstance.findAll();
        res.json(products);
    }

    async show(req: Request, res: Response) {
        const { productId } = req.params;

        if (!productId) {
            return res.status(404).json({
                error: "Invalid payload",
            });
        }

        const product = await ProductsRepositoryInstance.findById(productId);
        if (!product) {
            return res.status(404).json({
                error: "Product not found",
            });
        }

        return res.json(product);
    }

    async store(req: Request, res: Response) {
        const imagePath = req.file?.filename;
        const { name, description, price, ingredients, category } = req.body;

        if (!name || !description || !price || !category || !imagePath) {
            return res.status(500).json({ error: "Invalid payload" });
        }

        const productExists = await ProductsRepositoryInstance.findByName(name);
        if (productExists) {
            return res.status(500).json({ error: "Product already exists" });
        }

        const product = await ProductsRepositoryInstance.create({
            name,
            description,
            imagePath,
            price: Number.parseFloat(price),
            ingredients: ingredients ? JSON.parse(ingredients) : [],
            category,
        });
        return res.status(201).json(product);
    }

    async update(req: Request, res: Response) {
        const { productId } = req.params;
        if (!productId) {
            return res.status(500).json({ error: "Invalid payload" });
        }

        const productExists = await ProductsRepositoryInstance.findById(
            productId
        );
        if (!productExists) {
            return res.status(404).json({ error: "Product not found" });
        }

        const { name, description, imagePath, price, ingredients, category } =
            req.body;
        const product = await ProductsRepositoryInstance.update(productId, {
            name,
            description,
            imagePath,
            price,
            ingredients,
            category,
        });

        return res.status(200).json(product);
    }
}

// Singleton
export const ProductsControllerInstance = new ProductsController();
