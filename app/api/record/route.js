import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Record from "@/models/record";

//get all records
export async function GET(request) {
  await connectMongoDB();
  const records = await Record.find();
  const response = {
    status: "success",
    message: "Record fetched successfully",
    data: records,
  };
  return NextResponse.json(response);
}

//create a record
export async function POST(request) {
  const { name, email, phone } = await request.json();
  await connectMongoDB();
  await Record.create({ name, email, phone });
  const response = {
    status: "success",
    message: "Record created successfully",
  };
  return NextResponse.json(response);
}
