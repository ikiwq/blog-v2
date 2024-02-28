import { ArticlesWithCount, BlogArticle, FindSimilarRequest } from "@/models/article.model";
import { API_URL, CACHE_ONE_DAY, MOBILE_MENU_ID } from "./constants"
import { Article, Category } from "@prisma/client";

export const toggleMobileMenu = () => {
    const menu = document.getElementById(MOBILE_MENU_ID);
    menu?.classList.toggle("flex");
    menu?.classList.toggle("hidden");
    document.documentElement.classList.toggle("overflow-y-hidden")
}

export const getCategory = async(slug : string) : Promise<Category | undefined> => {
    try{
        const res = await fetch(`${API_URL}/api/categories/${slug}`, {
            next: {
                revalidate: CACHE_ONE_DAY
            }
        })
    
        if(!res.ok){
            return undefined;
        }
    
        return res.json();
    } catch(err){
        console.log(err);
    }
}

export const getCategories = async (): Promise<Array<Category> | undefined> => {
    try{
        const res = await fetch(`${API_URL}/api/categories/`, {
            next: {
                revalidate: CACHE_ONE_DAY
            }
        });
    
        if (!res.ok) {
            return undefined;
        }
    
        return res.json();
    } catch(err){
        console.log(err);
    }
}

export const getArticle = async (slug: string): Promise<BlogArticle | undefined> => {
    try{
        const res = await fetch(`${API_URL}/api/articles/${slug}`, {
            next: {
                revalidate: CACHE_ONE_DAY
            }
        });
    
        if (!res.ok) {
            return undefined;
        }
    
        return res.json();
    } catch(err){
        console.log(err);
    }
}

export const executeArticleQuery = async (url: string): Promise<ArticlesWithCount | { articles : [], count : number}> => {
    try{
        const res = await fetch(url, {
            next: {
                revalidate: CACHE_ONE_DAY
            }
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

export const executeArticleQueryWithBody = async (url: string, body : any): Promise<ArticlesWithCount | { articles : [], count : number}> => {
    try{
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            next: {
                revalidate: CACHE_ONE_DAY
            }
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

export const getRecentArticles = async (page : number): Promise<ArticlesWithCount | undefined> => {
    return executeArticleQuery(`${API_URL}/api/articles?page=${page}`);
}

export const getUnmarkedRecentArticles = async (limit : number): Promise<ArticlesWithCount | undefined> => {
    return executeArticleQuery(`${API_URL}/api/articles?featured=false&editorschoice=false&limit=${limit}`);
}

export const getFeatured = async (limit : number): Promise<ArticlesWithCount> => {
    return executeArticleQuery(`${API_URL}/api/articles?featured=true&limit=${limit}`)
}

export const getFeaturedAndExclude = async (limit : number, exclude : number): Promise<ArticlesWithCount> => {
    return executeArticleQuery(`${API_URL}/api/articles?featured=true&limit=${limit}&exclude=${exclude}`)
}

export const getSimilarArticles = async (body : FindSimilarRequest): Promise<ArticlesWithCount> => {
    return executeArticleQueryWithBody(`${API_URL}/api/articles/similar`, body)
}

export const getArticleByCategory = async(categorySlug : string) => {
    return executeArticleQuery(`${API_URL}/api/articles?category=${categorySlug}`)
}