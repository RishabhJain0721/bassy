import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Record from "@/models/record";

//get a record
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const record = await Record.findOne({ _id: id });
  const response = {
    status: "success",
    message: "Record fetched successfully",
    data: record,
  };
  return NextResponse.json(response);
}

//update a record
export async function PATCH(request, { params }) {
  await connectMongoDB();
  const { id } = params;
  const { name, email, phone } = await request.json();
  await Record.findByIdAndUpdate(id, { name, email, phone });
  const response = {
    status: "success",
    message: "Record created successfully",
  };
  return NextResponse.json(response);
}

//delete a record
export async function DELETE(request, { params }) {
  await connectMongoDB();
  const { id } = params;
  await Record.findByIdAndDelete(id);
  const response = {
    status: "success",
    message: "Record deleted successfully",
  };
  return NextResponse.json(response);
}
