import { IOrder, Order } from "../../Models/Order";

class OrderRepository {
    async findAll() {
        return await Order.find({}).sort({ createdAt: "desc" });
    }

    async findById(id: string) {
        return await Order.find({ $where: id });
    }

    async create({ table, status, createdAt, products }: IOrder) {
        const order = await Order.create({
            table,
            status,
            createdAt,
            products,
        });
        return order;
    }
}

export const OrderRepositoryInstance = new OrderRepository();
