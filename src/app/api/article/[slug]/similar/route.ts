import { ArticleWithCategories, ArticlesWithCount } from "@/models/article.model";
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
                            query: slug,
                            path: {
                                wildcard: "*"
                            }
                        }
                    }
                },
                {
                    $limit: 4
                }
            ]
        })
        
        const parsedArticles = (articles as unknown as Array<Article>);
        const articlesWithCategory = parsedArticles
        .filter((article)=>article.title != slug)
        .map((article)=>{
            const articleWithCategory : ArticleWithCategories = {
                article: article,
                categories: []
            }
            return articleWithCategory;
        })
        let count : number = parsedArticles.length;

        let response : ArticlesWithCount = {
            articles: articlesWithCategory,
            count: count
        }

        return new NextResponse(JSON.stringify(response), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
}