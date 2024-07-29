import { Category, ICategory } from "../../Models/Category";
import { Product } from "../../Models/Product";

class CategoryRepository {
    async findAll() {
        return await Category.find({}, "name icon").sort({ name: "asc" });
    }

    async findByName(name: string) {
        return await Category.findOne({ name }, "name");
    }

    async findById(id: string) {
        return await Category.findOne().where({ _id: id });
    }

    async findCategoryProducts(id: string) {
        const categoryProducts = await Product.find()
            .where({ category: id })
            .populate("category");
        return categoryProducts;
    }

    async create({ name, icon }: ICategory) {
        const category = await Category.create({ name, icon });
        return category;
    }

    async update(id: string, { name, icon }: ICategory) {
        const category = await Category.findByIdAndUpdate(id, {
            name,
            icon,
        });
        return category;
    }
}

export const CategoryRepositoryInstance = new CategoryRepository();
