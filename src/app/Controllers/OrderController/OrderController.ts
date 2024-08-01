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
            return res.status(500).json({
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
        const { table, status, products } = req.body;
        const order = await OrderRepositoryInstance.create({
            table,
            status,
            products,
        });
        res.json(order);
    }

    async update(req: Request, res: Response) {
        const { orderId } = req.params;
        if (!orderId) {
            return res.status(500).json({
                error: "Invalid payload",
            });
        }

        const { status } = req.body;
        if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
            return res.status(500).json({
                error: "Invalid payload",
            });
        }
        const order = await OrderRepositoryInstance.update(orderId, {
            status,
        });
        return res.json(order);
    }

    async delete(req: Request, res: Response) {
        const { orderId } = req.params;
        if (!orderId) {
            return res.status(500).json({
                error: "Invalid payload",
            });
        }

        const deleteOp = await OrderRepositoryInstance.delete(orderId);
        return res.status(202).json(deleteOp);
    }
}

// Singleton
export const OrderControllerInstance = new OrderController();
