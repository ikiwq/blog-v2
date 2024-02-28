import { Article, Category } from "@prisma/client";

export type BlogArticle = Article & {
    categories: Array<Category>
}

export type ArticlesWithCount = {
    articles : Array<BlogArticle>;
    count : number;
}

export type FindSimilarRequest = {
    title : string,
    exclude : Array<number>
}