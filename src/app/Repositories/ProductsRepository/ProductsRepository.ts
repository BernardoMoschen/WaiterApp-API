import { Product } from "../../Models/Product";

class ProductsRepository {
    async findAll() {
        return await Product.find({}, "name icon").sort({ name: "asc" });
    }

    async findByName(name: string) {
        return await Product.find({ name }, "name");
    }

    // async delete() {
    //     const deleteOp = await Product.deleteOne({ $where: { name: name } });
    //     return deleteOp;
    // }

    // async create({ name,  }: IProduct) {
    //     const Product = await Product.create({ name, icon });
    //     return category;
    // }
}

export const ProductsRepositoryInstance = new ProductsRepository();
