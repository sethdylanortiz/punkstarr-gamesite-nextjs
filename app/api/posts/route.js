import { NextResponse } from "next/server"

export const GET = async (request) => {

    // fetch / POST

    try{

        

        return new NextResponse("SUCCESS - Database Report-Bug", {status: 200});
    }catch(err){
        return new NextResponse("ERROR - Database Report-Bug", {status: 500});
    }
}