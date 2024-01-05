import { POST_PER_PAGE } from "@/app/constants";
import { ArticleWithCategories, ArticlesWithCount } from "@/models/article.model";
import prisma from "@/utils/connect";
import { Category, CategoryOnModel } from "@prisma/client";
import { NextResponse } from "next/server";

const getOrderByQuery = (orderBy : string) => {
    let orderByQuery;
    if(orderBy == 'createdAtAsc'){

    }
    if(orderBy == 'createdAtDesc'){

    }
    if(orderBy == 'likes'){

    }
}

export const GET = async (req : any) => {
    const { searchParams } = new URL(req.url);

    const page = + !searchParams.get("page");
    const cat = searchParams.get("category");
    const featured = searchParams.get("featured");
    const editorsChoice = searchParams.get("editorschoice");
    const orderBy = searchParams.get('orderBy');

    console.log("ed" + editorsChoice)

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(featured  === "true" && {featured: "true"}),
            ...(featured  === "false" && {featured: "false"}),
            ...(editorsChoice === "true" && {editorsChoice : "true"}),
            ...(editorsChoice === "false" && {editorsChoice : "false"})
        },
    };

    try {
        const [articles, count] = await prisma.$transaction([
            prisma.article.findMany({
                ...query as any,
                orderBy: {
                    createdAt : 'desc'
                },
                include : {
                    categoryOnModel : {
                        include : {
                            category : true
                        }
                    }
                }
            }),
            prisma.article.count({ where: query.where as any }),
        ]);

        let articlesWithCategory : Array<ArticleWithCategories> = articles.map(article => {
            let categoriesOnModel : Array<CategoryOnModel> = (article as any).categoryOnModel;
            let categories = categoriesOnModel.map((categoryOnModel)=> (categoryOnModel as any).category);

            return {
                article : article,
                categories : categories,
            }
        })

        let response : ArticlesWithCount = {
            articles : articlesWithCategory,
            count : count
        }

        return new NextResponse(JSON.stringify(response), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
};