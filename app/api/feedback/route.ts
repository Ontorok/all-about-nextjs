import { NextResponse } from "next/server";

export type Feedback = {
  name: string;
  email: string;
  message: string;
};

export type UserFeedback = {
  username?: string;
  useremail?: string;
  usermessage?: string;
};

export async function POST(request: Request) {
  const data: Partial<Feedback> = await request.json();
  const { email, message, name } = data;
  const obj: UserFeedback = {
    useremail: email,
    usermessage: message,
    username: name,
  };
  return NextResponse.json(obj);
}
