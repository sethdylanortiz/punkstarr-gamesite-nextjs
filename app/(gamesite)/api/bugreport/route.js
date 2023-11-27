import { NextResponse } from "next/server"
// import writeBugDB from "@/app/lib/dynamodb";
import writeBugDB from "../../lib/dynamodb";

export async function POST(req) {

    const {username, email, reportmsg} = await req.json();
    
    try{
        console.log("init request to write to db");
        await writeBugDB(username, email, reportmsg);

        return NextResponse.json({
            responseMsg: ["route.js - success writing " + username + "'s bug report to dynamoDB!"],
            success: true,
        });
    }catch(error){
        console.log("error inside route.js: " + error);
        return NextResponse.json({
            responseMsg: ["route.js - error cannot send message to db"],
            success: false,
        });
    }
}