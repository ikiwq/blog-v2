import { ArticlesWithCount } from "@/models/article.model";
import prisma from "@/utils/connect";
import { Article } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: { params: { slug: string } }) => {
    const { slug } = params;

    try {
        const articles = await prisma.article.aggregateRaw({
            pipeline: [
                {
                    $search: {
                        index: "article_index",
                        text: {
                            query: "pc",
                            path: {
                                wildcard: "*"
                            }
                        }
                    }
                }
            ]
        })

        console.log((articles as unknown as Array<Article>));
        
        return new NextResponse(JSON.stringify(articles), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
}