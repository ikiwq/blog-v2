import { POST_PER_PAGE } from "@/common/constants";
import { ArticlesWithCount } from "@/models/article.model";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

const formatArticle = (article : any) => {
    return {
        ...article,
        categories: article.categories_relations.map((cat_relation : any) => cat_relation.category)
    }
}

export const GET = async (req : NextRequest) => {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page") ?? 1;
    const cat = searchParams.get("category");
    const featured = searchParams.get("featured");
    const editorsChoice = searchParams.get("editorschoice");
    const exclude = Number(searchParams.get("exclude"))
    
    let stringLimit = searchParams.get('limit');

    let limit;
    if(stringLimit){
        limit = +stringLimit
    }else{
        limit = POST_PER_PAGE
    }

    const query = {
        take: limit,
        skip: POST_PER_PAGE * (Number(page) - 1),
        where: {
            ...((featured  === "true" || featured == "false") && {featured: featured == "true"}),
            ...((editorsChoice  === "true" || editorsChoice == "false") && {editors_choice: editorsChoice == "true"}),
            ...(cat && {
                categories_relations: {
                    some: {
                      category: {
                        slug: cat
                      },
                    },
                  },
            }),
            ...(exclude && {
                id: {
                    notIn : [exclude]
                }
            })
        },
    };

    try {
        const articles = await prisma.article.findMany({
            ...query as any,
            include: {
                categories_relations: {
                    include : {
                        category: true
                    }
                }
            },
            orderBy: {
                id: "desc"
            }
        });

        const count = await prisma.article.count({where: query.where as any});

        const formatted_articles = articles.map(a => formatArticle(a))

        let response : ArticlesWithCount = {
            articles : formatted_articles,
            count : count
        }

        return new NextResponse(JSON.stringify(response), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
};