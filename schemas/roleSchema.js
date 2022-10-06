import mongoose from "mongoose";
const { Schema, model } = mongoose;

const role = new Schema({
  name: {
    type: String,
    required: true,
    default: "Nameless",
  },
  value: {
    type: String,
    required: true,
    default: "No value",
  },
  importance: {
    type: String,
    required: true,
    default: "Not important",
  },
});
const RoleModel = mongoose.models.Role || mongoose.model("Role", role);

export default RoleModel;
