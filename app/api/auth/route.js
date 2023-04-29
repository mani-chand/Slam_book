import { NextResponse } from 'next/server'
import dbConn from "@/Utils/dbCon";
import User from "@/model/User";
export async function POST(req, res) {
  try {
    //take email and password from request body
    const { email, password } = await req.json();
    //connect to database
    const cn = await dbConn();
    //find user with the email.
    const user = await User.findOne({ email });
    //if user not found respond with user not found message
    if (!user) {
      const response = new Response(JSON.stringify(user), {
        headers: { 'content-type': 'application/json' },
        status: 403,
      });
      return response
    }
    //if user found and if password is equal respond with user found message
    else if (user && user.password == password) {
      const response = new Response(JSON.stringify(user), {
        headers: { 'content-type': 'application/json' },
        status: 201,
      });
      return response
    }
    //if user found and if password is not equal respond with wrong password message
    else {
      const response = new Response(JSON.stringify({}), {
        headers: { 'content-type': 'application/json' },
        status: 401,
      });
      return response
    }
  } catch (e) {
    return new Response(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
/*import {NextResponse} from "next/server";
export async function GET(request) {
  const res = await request.json();
  console.log(res);
  return new Response(res);
}*/

export async function GET(request) {
  return NextResponse.json({ hello: 'Next.js' })
}