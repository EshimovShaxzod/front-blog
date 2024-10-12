import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: [true, "password is required"],
  },
});

export default models.User || model("Post", userSchema);
