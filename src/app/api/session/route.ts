import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    if(request.cookies.get("session")){
        return new NextResponse(JSON.stringify({ message : "Session already existing"}), {status:400})
    }
    const sessionId = randomUUID();
    let response = new NextResponse(JSON.stringify({ message : "Session successfully created"}), {status: 200});

    response.cookies.set({
        name: "session",
        value: sessionId,
        httpOnly: true
    })

    return response;
}