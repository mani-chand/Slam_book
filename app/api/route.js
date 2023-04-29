import dbConn from "@/Utils/dbCon";
import User from "@/model/User";
export async function POST(req, res) {
  try {
    const { email, password, mobile } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      const cn = await dbConn();
      const newUser = await new User({
        email,
        password,
        mobile,
      }).save();
      return new Response(JSON.stringify(
        {
          message: "User created successfully",
        },
        {
          status: 200,
        }
      ));
    } else {
      return new Response("user already found with the email");
    }
  } catch (e) {
    return new Response(JSON.stringify(
      { message: "Server error, please try again!" },
      { status: 500 }
    ));
  }
}
