import { IProduct, Product } from "../../Models/Product";

class ProductsRepository {
    async findAll() {
        return await Product.find({}).sort({ name: "asc" });
    }

    async findByName(name: string) {
        return await Product.find({ name });
    }

    async findById(id: string) {
        return await Product.find({ $where: id });
    }

    async create({
        name,
        description,
        imagePath,
        price,
        ingredients,
        category,
    }: IProduct) {
        const product = await Product.create({
            name,
            description,
            imagePath,
            price,
            ingredients,
            category,
        });
        return product;
    }

    async update(
        id: string,
        { name, description, imagePath, price, ingredients, category }: IProduct
    ) {
        const product = await Product.findByIdAndUpdate(
            { id },
            { name, description, imagePath, price, ingredients, category }
        );
        return product;
    }
}

export const ProductsRepositoryInstance = new ProductsRepository();
