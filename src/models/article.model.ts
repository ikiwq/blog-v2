import { Article, Category } from "@prisma/client";

export type ArticleWithCategories = {
    article : Article;
    categories : Array<Category>;
}

export type ArticlesWithCount = {
    articles : Array<ArticleWithCategories>;
    count : number;
}