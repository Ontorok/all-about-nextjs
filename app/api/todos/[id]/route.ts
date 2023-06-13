import { Todo } from "@/models/todo.model";
import { NextResponse } from "next/server";
import { limiter } from "../../config/limiter";

const DATA_SOURCE_URL = `${process.env.DATA_BASE_URL}/todos`;

type Props = {
  params: {
    id: string;
  };
};

// GET should be UPPER Case, other wise won't work
export async function GET(request: Request, { params: { id } }: Props) {
  const remaining = await limiter.removeTokens(1);
  const origin = request.headers.get("origin");
  if (remaining < 1) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many request",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  }

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const todo: Todo = await res.json();
  if (!todo.id) {
    return NextResponse.json({ message: "Todo not found" });
  }
  return NextResponse.json(todo);
}
