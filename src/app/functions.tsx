import { ArticleWithCategories, ArticlesWithCount } from "@/models/article.model";
import { MOBILE_MENU_ID } from "./constants"
import { Category } from "@prisma/client";

export const toggleMobileMenu = () => {
    const menu = document.getElementById(MOBILE_MENU_ID);
    menu?.classList.toggle("flex");
    menu?.classList.toggle("hidden");
}

export const getPopularCategories = async (): Promise<Array<Category>> => {
    const res = await fetch(`http://localhost:3000/api/category/`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return [];
    }

    return res.json();
}

export const getRecentArticles = async (): Promise<ArticlesWithCount> => {
    return executeArticleQuery(`http://localhost:3000/api/article?editorschoice=false&featured=false`);
}

export const getEditorsChoice = async (): Promise<ArticlesWithCount> => {
    return executeArticleQuery(`http://localhost:3000/api/article?editorschoice=true`);
}

export const getFeatured = async (): Promise<ArticlesWithCount> => {
    return executeArticleQuery(`http://localhost:3000/api/article?featured=true`)
}

export const getSimilarArticles = async (slug : string): Promise<ArticlesWithCount> => {
    return executeArticleQuery(`http://localhost:3000/api/article/${slug}/similar`)
}

const executeArticleQuery = async (url: string): Promise<ArticlesWithCount> => {
    const res = await fetch(url, {
        cache: "no-store",
    });

    if (!res.ok) {
        return {
            articles: [],
            count: 0,
        };
    }

    return res.json();
}

export const getArticle = async (slug: string): Promise<ArticleWithCategories> => {
    const res = await fetch(`http://localhost:3000/api/article/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw Error;
    }

    return res.json();
}