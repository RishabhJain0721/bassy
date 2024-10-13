import mongoose, { Schema } from "mongoose";

const recordSchema = new Schema(
  {
    name: String,
    email: String,
    phone: Number,
  },
  {
    timestamps: true,
  }
);

const Record = mongoose.models.Record || mongoose.model("Record", recordSchema);

export default Record;
