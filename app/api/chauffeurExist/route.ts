import { connectMongoDB } from "@/lib/mongodb";
import Chauffeur from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    try {
        await connectMongoDB();
        const {email} = await req.json();
        const chauffeur = await Chauffeur.findOne({email}).select("_id");
        console.log("chauffeur" , chauffeur)
        return NextResponse.json({chauffeur});
    } catch (error) {
        console.log(error)
    }
}