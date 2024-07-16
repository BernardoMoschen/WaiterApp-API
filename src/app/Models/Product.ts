import { model, Schema } from "mongoose";

interface IProduct {
    description: string;
    name: string;
    imagePath: string;
    price: number;
    ingredients: {
        name: string;
        icon: string;
    }[];
    category: Schema.Types.ObjectId;
}

export const Product = model<IProduct>(
    "Product",
    new Schema<IProduct>({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imagePath: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        ingredients: {
            required: true,
            type: [
                {
                    name: {
                        type: String,
                        required: true,
                    },
                    icon: {
                        type: String,
                        required: true,
                    },
                },
            ],
        },
        category: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Category",
        },
    })
);
