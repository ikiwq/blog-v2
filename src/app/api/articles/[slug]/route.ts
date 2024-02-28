import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req: any, { params }: { params: { slug: string } }) => {
    const { slug } = params;

    try {
        const article = await prisma.article.findFirst({
            where: {
                slug: slug,
            },
            include: {
                categories_relations: {
                    include: {
                        category: true
                    }
                }
            }
        })

        const res = {
            ...article,
            categories : article?.categories_relations.map(cr => cr.category)
        }

        return new NextResponse(JSON.stringify(res), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
}