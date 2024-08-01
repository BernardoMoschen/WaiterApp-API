import { IOrder, Order } from "../../Models/Order";

class OrderRepository {
    async findAll() {
        return await Order.find({})
            .sort({ createdAt: "desc" })
            .populate("products.product");
    }

    async findById(id: string) {
        return await Order.find({ $where: id }).populate("products.product");
    }

    async create({ table, status, products }: Omit<IOrder, "createdAt">) {
        const order = await Order.create({
            table,
            status,
            products,
        });
        return order;
    }

    async update(id: string, { status }: Pick<IOrder, "status">) {
        const order = await Order.findByIdAndUpdate(id, {
            status,
        });
        return order;
    }
}

export const OrderRepositoryInstance = new OrderRepository();
