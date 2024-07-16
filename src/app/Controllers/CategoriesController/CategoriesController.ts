import { Request, Response } from "express";
import { CategoryRepositoryInstance } from "../../Repositories/CategoryRepository/CategoryRepository";

class CategoryController {
    async index(_req: Request, res: Response) {
        const categories = await CategoryRepositoryInstance.findAll();
        res.json(categories);
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

    // async update(req: Request, res: Response) {
    //     const { id } = req.params;
    //     const { name } = req.body;

    //     const categoriesExists = await CategoryRepository.findById(id);
    //     if (!categoriesExists) {
    //         return res.status(404).json({ error: "Category not found" });
    //     }

    //     const categoryByName = await CategoryRepository.findByName(name);
    //     if (categoryByName && categoryByName.id !== id) {
    //         return res.status(404).json({ error: "This name already exists." });
    //     }

    //     const category = await CategoryRepository.update(id, {
    //         name,
    //     });

    //     res.status(200).json(category);
    // }

    // async delete(req: Request, res: Response) {
    //     const { id } = req.params;

    //     const category = await CategoryRepository.findById(id);

    //     if (!category) {
    //         return res.status(404).json({
    //             error: "Category not found",
    //         });
    //     }

    //     await CategoryRepository.delete(id);
    //     return res.sendStatus(204);
    // }
}

// Singleton
export const CategoryControllerInstance = new CategoryController();
