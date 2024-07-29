import { IOrder, Order } from "../../Models/Order";

class OrderRepository {
    async findAll() {
        return await Order.find({}).sort({ createdAt: "desc" });
    }

    async findById(id: string) {
        return await Order.find({ $where: id });
    }

    async create({ table, status, products }: Omit<IOrder, "createdAt">) {
        const order = await Order.create({
            table,
            status,
            products,
        });
        return order;
    }

    async update(id: string, { table, status, products }: IOrder) {
        const order = await Order.findByIdAndUpdate(
            { id },
            {
                table,
                status,
                products,
            }
        );
        return order;
    }
}

export const OrderRepositoryInstance = new OrderRepository();
