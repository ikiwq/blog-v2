import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { CategoryOnModel } from "@prisma/client";
import { ArticleWithCategories } from "@/models/article.model";

export const GET = async (req: any, { params }: { params: { slug: string } }) => {
    const { slug } = params;

    try {
        const article = await prisma.article.findFirst({
            where: {
                slug: slug,
            },
            include: {
                categoryOnModel: {
                    include: {
                        category: true
                    }
                }
            }
        })

        let categoriesOnModel: Array<CategoryOnModel> = (article as any).categoryOnModel;
        let categories = categoriesOnModel.map((categoryOnModel) => (categoryOnModel as any).category);

        let response: ArticleWithCategories = {
            article: article!,
            categories: categories,
        }

        return new NextResponse(JSON.stringify(response), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
}