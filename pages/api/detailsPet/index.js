import { verify } from "jsonwebtoken";

export default function detailsPet(req,res){

    const {MyTokenName}=req.cookies;
    if(!MyTokenName){
        return res.status(401).json({error:"No token provided"})
    }

    const user = verify(MyTokenName,'secret');
    console.log(user);
    
    return res.json({
        user:'DetailsPet'
    });
}