import { NextResponse } from "next/server"
import writeBugDB from "@/app/lib/dynamodb";

export async function POST(req) {

    const {username, email, reportmsg} = await req.json();
    
    try{
        console.log("init request to write to db");
        await writeBugDB(username, email, reportmsg);

        return NextResponse.json({
            responseMsg: ["route.js - success writing " + username + "'s bug report to dynamoDB!"],
            success: true,
            status: 200
        });
    }catch(error){
        return NextResponse.json({
            responseMsg: ["route.js - error cannot send message to db"],
            success: true,
            status: 500
        });
    }
}