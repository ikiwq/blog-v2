import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: { params: { slug: string } }) => {
    const { slug } = params;

    try {
        const category = await prisma.category.findFirst({
            where: {
                slug : slug
            }
        });

        return new NextResponse(JSON.stringify(category), {status: 200});
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), {status: 500});
    }
};