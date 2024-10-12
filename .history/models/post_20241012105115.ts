import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: [true, "body is required"],
  },
});

export default models.Post || model("Post", postSchema);
