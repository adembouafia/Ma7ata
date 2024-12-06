import {NextResponse} from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Chauffeur from "../../../models/chauffeur";
import bycript from 'bcryptjs';

export async function POST(req: { json: () => PromiseLike<{ email: any; name: any; password: any; }>}){
    try{
        const {email , name , password} = await req.json();
        const hashedPassword = await bycript.hash(password,10);
        await connectMongoDB();
        const chauffeur = await Chauffeur.findOne({email});
        if (chauffeur){
            return NextResponse.json({message:"deja existe"}, {status : 400})
        }else{
            await Chauffeur.create({email , name , password:hashedPassword});
            return NextResponse.json({message :  'user registred ! '} , {status : 201});
        }
        
    }catch(error){
        return NextResponse.json({message : "an error while regestring "} , {status : 500});
    }
}