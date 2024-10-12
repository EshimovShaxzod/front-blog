import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    body: {
        type: String,
        required: [true, "password is required"],
    }
});

export default models.User || model("User", userSchema);