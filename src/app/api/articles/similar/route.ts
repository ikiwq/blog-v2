import { ArticlesWithCount, FindSimilarRequest } from "@/models/article.model";
import prisma from "@/utils/connect";
import { Article, Category, Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

const formatArticle = async (article : any) => {

    const categories = await prisma.$queryRaw<Array<Category>>(
        Prisma.sql`
        SELECT
            * FROM categories
        WHERE
            id IN (
                SELECT
                    category_id FROM articles_categories_links
                WHERE
                    article_id = ${article.id}
            )`
    );

    return {
        ...article,
        categories: categories
    }
}

export const POST = async (req: NextRequest) => {
    const body : FindSimilarRequest = await req.json();
    console.log(body.exclude.join(","))
    try {
        const articles : Array<Article> = await prisma.$queryRaw<Array<Article>>(
            Prisma.sql`
            SELECT 
                * FROM articles a
            WHERE 
                MATCH(title, content)
                AGAINST (${body.title} IN NATURAL LANGUAGE MODE)
            AND
                id NOT IN (${body.exclude.join(',')})
            LIMIT 2`
        );
                    
        let blogArticles = await Promise.all(articles?.map(async (a) => await formatArticle(a)))

        let response : ArticlesWithCount = {
            articles: blogArticles,
            count: articles.length
        }

        return new NextResponse(JSON.stringify(response), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
}