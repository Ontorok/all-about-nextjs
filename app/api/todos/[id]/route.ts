import { Todo } from "@/models/todo.model";
import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.DATA_BASE_URL}/todos`;

// GET should be UPPER Case, other wise won't work
export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  console.log({
    mainurl: request.url,
    lastIndexof: request.url.lastIndexOf("/"),
  });

  const todo: Todo = await res.json();

  if (!todo.id) {
    return NextResponse.json({ message: "Todo not found" });
  }

  return NextResponse.json(todo);
}
