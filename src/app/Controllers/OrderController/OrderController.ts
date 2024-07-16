import { Request, Response } from "express";
import { OrderRepositoryInstance } from "../../Repositories/OrderRepository/OrderRepository";

class OrderController {
    async index(_req: Request, res: Response) {
        const orders = await OrderRepositoryInstance.findAll();
        res.json(orders);
    }

    async show(req: Request, res: Response) {
        const { orderId } = req.params;

        if (!orderId) {
            return res.status(404).json({
                error: "Invalid payload",
            });
        }

        const order = await OrderRepositoryInstance.findById(orderId);
        if (!order) {
            return res.status(404).json({
                error: "Order not found",
            });
        }

        return res.json(order);
    }

    async store(req: Request, res: Response) {
        const { table, status, createdAt, products } = req.body;
        const order = await OrderRepositoryInstance.create({
            table,
            status,
            createdAt,
            products,
        });
        res.json(order);
    }

    async update(req: Request, res: Response) {
        const { orderId } = req.params;
        if (!orderId) {
            return res.status(500).json({ error: "Invalid payload" });
        }

        const orderExists = await OrderRepositoryInstance.findById(orderId);
        if (!orderExists) {
            return res.status(404).json({ error: "Order not found" });
        }

        const { table, status, createdAt, products } = req.body;
        const order = await OrderRepositoryInstance.update(orderId, {
            table,
            status,
            createdAt,
            products,
        });

        return res.status(200).json(order);
    }
}

// Singleton
export const OrderControllerInstance = new OrderController();
