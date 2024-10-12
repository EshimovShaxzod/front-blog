import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: [true, "body is required"],
  },
  image: {
    type: String,  // Image yo'lini saqlash
    required: false,
  },
});

export default models.Post || model("Post", postSchema);
