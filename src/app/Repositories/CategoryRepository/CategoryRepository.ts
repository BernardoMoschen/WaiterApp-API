import { Category, ICategory } from "../../Models/Category";

class CategoryRepository {
    async findAll() {
        return await Category.find({}, "name icon").sort({ name: "asc" });
    }

    async findByName(name: string) {
        return await Category.findOne({ name }, "name");
    }

    async findById(id: string) {
        return await Category.find({ $where: id });
    }

    async create({ name, icon }: ICategory) {
        const category = await Category.create({ name, icon });
        return category;
    }

    async update(id: string, { name, icon }: ICategory) {
        const category = await Category.findByIdAndUpdate(
            { id },
            {
                name,
                icon,
            }
        );
        return category;
    }
}

export const CategoryRepositoryInstance = new CategoryRepository();
