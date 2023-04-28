import dbConn from "@/Utils/dbCon";
import User from "@/model/User";
//import {NextResponse} from "next/server";

export async function POST(req, res) {
  try {
    const { email, password, mobile } = await req.json();
    const cn = await dbConn();
    //console.log(cn)
    //console.log(email,password,mobile)
    const newUser = await new User({
      email,
      password,
      mobile,
    }).save();
    //console.log(newUser)
    return new Response(
      {
        message: "User created successfully",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return new Response(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
