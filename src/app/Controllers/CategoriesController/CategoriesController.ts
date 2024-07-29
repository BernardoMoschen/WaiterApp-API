import { Request, Response } from "express";
import { CategoryRepositoryInstance } from "../../Repositories/CategoryRepository/CategoryRepository";

class CategoryController {
    async index(_req: Request, res: Response) {
        const categories = await CategoryRepositoryInstance.findAll();
        res.json(categories);
    }

    async show(req: Request, res: Response) {
        const { categoryId } = req.params;

        if (!categoryId) {
            return res.status(404).json({
                error: "Invalid payload",
            });
        }

        const category = await CategoryRepositoryInstance.findById(categoryId);
        if (!category) {
            return res.status(404).json({
                error: "Category not found",
            });
        }

        return res.json(category);
    }

    async store(req: Request, res: Response) {
        const { name, icon } = req.body;
        if (!name || !icon) {
            return res.status(400).json({ error: "Invalid post payload." });
        }
        const nameTaken = await CategoryRepositoryInstance.findByName(name);
        if (nameTaken) {
            return res.status(404).json({ error: "This name already exists." });
        }

        const storedCategories = await CategoryRepositoryInstance.create({
            name,
            icon,
        });
        return res.json(storedCategories);
    }

    async update(req: Request, res: Response) {
        const { categoryId } = req.params;
        const { name, icon } = req.body;

        if (!categoryId || !name || !icon) {
            return res.status(404).json({
                error: "Invalid payload",
            });
        }

        const categoriesExists = await CategoryRepositoryInstance.findById(
            categoryId
        );
        if (!categoriesExists) {
            return res.status(404).json({ error: "Category not found" });
        }

        const category = await CategoryRepositoryInstance.update(categoryId, {
            name,
            icon,
        });

        return res.status(200).json(category);
    }

    async listProductsByCategory(req: Request, res: Response) {
        const { categoryId } = req.params;
        if (!categoryId) {
            return res.status(400).json({ error: "Invalid payload." });
        }
        const categoryProducts =
            await CategoryRepositoryInstance.findCategoryProducts(categoryId);
        return res.json(categoryProducts);
    }
}

// Singleton
export const CategoryControllerInstance = new CategoryController();
