import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: [true, "bosy is required"],
  },
});

export default models.Post || model("Post", postSchema);
