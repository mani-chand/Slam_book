import dbConn from "@/Utils/dbCon";
import Memory from "@/model/Memory";
export async function POST(req, res) {
  try {
    const { Name,Tag,Description,file } = await req.json();
    const cn = await dbConn();
    const newPage =await new Memory({
        Name,
        Tag,
        Description,
        file
    }).save()
    const response = new Response(JSON.stringify(newPage), {
      headers: { 'content-type': 'application/json' },
      status: 201,
    });
    return response
  }catch(err){
    console.log(err)
  }
}
