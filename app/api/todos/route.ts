import { Todo } from "@/models/todo.model";
import { NextResponse } from "next/server";
import { todo } from "node:test";
import { json } from "stream/consumers";

const DATA_SOURCE_URL = `${process.env.DATA_BASE_URL}/todos`;

// GET should be UPPER Case, other wise won't work
export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const res = await fetch(DATA_SOURCE_URL, {
    method: "GET",
  });
  const todos: Todo[] = await res.json();
  return new NextResponse(JSON.stringify(todos), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) return NextResponse.json({ message: "ID is required" });
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json({ message: `Todo ${id} Deleted` });
}

export async function POST(request: Request) {
  const todo = await request.json();
  console.log(todo);

  const res = await fetch(`${DATA_SOURCE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const savedTodo: Todo = await res.json();

  return NextResponse.json({ message: `Todo ${savedTodo.id} Created` });
}

export async function PUT(request: Request) {
  const todo: Todo = await request.json();
  console.log(todo);

  const res = await fetch(`${DATA_SOURCE_URL}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const savedTodo: Todo = await res.json();

  return NextResponse.json({ message: `Todo ${savedTodo.id} Updated` });
}
