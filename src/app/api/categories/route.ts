import { CATEGORY_ON_HOMEPAGE } from "@/common/constants";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany({
            take: CATEGORY_ON_HOMEPAGE,
            orderBy: {
                articles_relations: {
                    _count: "desc"
                }
            }
        });

        return new NextResponse(JSON.stringify(categories), {status: 200});
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), {status: 500});
    }
};