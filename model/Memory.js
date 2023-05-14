import mongoose from "mongoose";
const pageSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Tag:{type:String,required:true},
    Description:{type:String,required:true},
    file : {type:String}
})
const Page = mongoose.models.Page || mongoose.model("Page",pageSchema);
export default Page;