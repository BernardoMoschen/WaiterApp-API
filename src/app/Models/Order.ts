import { model, Schema } from "mongoose";

interface IOrder {
    table: string;
    status: "WAITING" | "IN_PRODUCTION" | "DONE";
    createdAt: Date;
    products: {
        product: Schema.Types.ObjectId;
        quantity: Number;
    }[];
}

export const Order = model<IOrder>(
    "Order",
    new Schema<IOrder>({
        table: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["WAITING", "IN_PRODUCTION", "DONE"],
            default: "WAITING",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required: true,
        },
        products: {
            type: [
                {
                    product: {
                        type: Schema.Types.ObjectId,
                        required: true,
                        ref: "Product",
                    },
                    quantity: {
                        type: Number,
                        default: 1,
                        required: true,
                    },
                },
            ],
        },
    })
);
