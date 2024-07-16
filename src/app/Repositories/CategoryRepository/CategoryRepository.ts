import { Category, ICategory } from "../../Models/Category";

class CategoryRepository {
    async findAll() {
        return await Category.find().sort({ name: "asc" });
    }

    // async delete() {
    //     const deleteOp = await Category.deleteOne({ $where: { name: name } });
    //     return deleteOp;
    // }

    async create({ name, icon }: ICategory) {
        const category = await Category.create({ name, icon });
        return category;
    }
}

export const CategoryRepositoryInstance = new CategoryRepository();
