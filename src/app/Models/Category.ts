import { model, Schema } from "mongoose";

interface ICategory {
    name: string;
    icon: string;
}

export const ICategory = model(
    "Category",
    new Schema<ICategory>({
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    })
);
