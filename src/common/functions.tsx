import { ArticleWithCategories, ArticlesWithCount } from "@/models/article.model";
import { API_URL, MOBILE_MENU_ID } from "./constants"
import { Category } from "@prisma/client";

export const toggleMobileMenu = () => {
    const menu = document.getElementById(MOBILE_MENU_ID);
    menu?.classList.toggle("flex");
    menu?.classList.toggle("hidden");
    document.documentElement.classList.toggle("overflow-y-hidden")
}

export const getPopularCategories = async (): Promise<Array<Category> | undefined> => {
    try{
        const res = await fetch(`${API_URL}/api/category/`, {
            cache: "no-store",
        });
    
        if (!res.ok) {
            return undefined;
        }
    
        return res.json();
    } catch(err){
        console.log(err);
    }
}


export const getRecentArticles = async (): Promise<ArticlesWithCount | undefined> => {
    return executeArticleQuery(`${API_URL}/api/article`);
}

export const getUnmarkedRecentArticles = async (limit : number): Promise<ArticlesWithCount | undefined> => {
    return executeArticleQuery(`${API_URL}/api/article?featured=false&editorschoice=false&limit=${limit}`);
}

export const getEditorsChoice = async (): Promise<ArticlesWithCount | undefined> => {
    return executeArticleQuery(`${API_URL}/api/article?editorschoice=true`);
}

export const getFeatured = async (limit : number): Promise<ArticlesWithCount> => {
    return executeArticleQuery(`${API_URL}/api/article?featured=true&limit=${limit}`)
}

export const getSimilarArticles = async (slug : string): Promise<ArticlesWithCount> => {
    return executeArticleQuery(`${API_URL}/api/article/${slug}/similar`)
}

export const getArticleByCategory = async(categorySlug : string) => {
    return executeArticleQuery(`${API_URL}/api/article?category=${categorySlug}`)
}

export const executeArticleQuery = async (url: string): Promise<ArticlesWithCount | { articles : [], count : number}> => {
    try{
        const res = await fetch(url, {
            cache: "no-store",
        });
    
        if (!res.ok) {
            return {
                articles: [],
                count: 0
            }
        }
    
        return res.json();
    } catch(err){
        console.log(err);
        return {
            articles: [],
            count: 0
        }
    }
}

export const getArticle = async (slug: string): Promise<ArticleWithCategories | undefined> => {
    try{
        const res = await fetch(`${API_URL}/api/article/${slug}`, {
            cache: "no-store",
        });
    
        if (!res.ok) {
            return undefined;
        }
    
        return res.json();
    } catch(err){
        console.log(err);
    }
}

export const getCategory = async(slug : string) : Promise<Category | undefined> => {
    try{
        const res = await fetch(`${API_URL}/api/category/${slug}`, {
            cache: "no-store",
        })
    
        if(!res.ok){
            return undefined;
        }
    
        return res.json();
    } catch(err){
        console.log(err);
    }
}