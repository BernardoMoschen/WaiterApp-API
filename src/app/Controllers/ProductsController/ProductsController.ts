import { Request, Response } from "express";
import { ProductsRepositoryInstance } from "../../Repositories/ProductsRepository/ProductsRepository";

class ProductsController {
    async index(_req: Request, res: Response) {
        const products = await ProductsRepositoryInstance.findAll();
        res.json(products);
    }

    // async store(req: Request, res: Response) {
    //     const { name, icon } = req.body;
    //     if (!name || !icon) {
    //         return res.status(400).json({ error: "Invalid post payload." });
    //     }
    //     const nameTaken = await ProductsRepositoryInstance.findByName(name);
    //     if (nameTaken) {
    //         return res.status(404).json({ error: "This name already exists." });
    //     }

    // const storedCategories = await ProductsRepositoryInstance.create({
    //     name,
    //     icon,
    // });
    // return res.json(storedCategories);
    // }
}

// Singleton
export const ProductsControllerInstance = new ProductsController();
