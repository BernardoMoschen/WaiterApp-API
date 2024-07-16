import { Request, Response } from "express";
import { OrderRepositoryInstance } from "../../Repositories/OrderRepository/OrderRepository";

class OrderController {
    async index(_req: Request, res: Response) {
        const orders = await OrderRepositoryInstance.findAll();
        res.json(orders);
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
    //
    // async update(req: Request, res: Response) {
    // const { table, status, createdAt, products } = req.body;
    //
    // const mockID = 1;
    // const orderExists = await OrderRepositoryInstance.findById(mockID);
    // if (!orderExists) {
    // return res.status(404).json({ error: "Order not found" });
    // }
    //
    // const order = await OrderRepositoryInstance.update(mockID, {
    // table,
    // status,
    // createdAt,
    // products,
    // });
    //
    // res.status(200).json(order);
    // }
}

// Singleton
export const OrderControllerInstance = new OrderController();
