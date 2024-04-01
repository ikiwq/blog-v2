import { Article, ArticlesCollection } from "@/models/article.model";
import { Category, CategoryCollection } from "@/models/category.model";
import { API_URL, CACHE_ONE_HOUR, MOBILE_MENU_ID, POST_PER_PAGE } from "./constants";

export const toggleMobileMenu = () => {
    const menu = document.getElementById(MOBILE_MENU_ID);
    menu?.classList.toggle("flex");
    menu?.classList.toggle("hidden");
    document.documentElement.classList.toggle("overflow-y-hidden")
}

export const getCategory = async(slug : string) : Promise<Category | undefined> => {
    try{
        const res = await fetch(`${API_URL}/categories/${slug}`, {
            next: {
                revalidate: CACHE_ONE_HOUR
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

export const getCategories = async (): Promise<CategoryCollection | undefined> => {
    try{
        const res = await fetch(`${API_URL}/categories`, {
            next: {
                revalidate: CACHE_ONE_HOUR
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

export const getArticle = async (slug: string): Promise<Article | undefined> => {
    try{
        const res = await fetch(`${API_URL}/articles/${slug}`, {
            next: {
                revalidate: CACHE_ONE_HOUR
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

export const executeArticleQuery = async (url: string): Promise<ArticlesCollection | { articles : [], count : number}> => {
    try{
        const res = await fetch(url, {
            next: {
                revalidate: CACHE_ONE_HOUR
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

export const executeArticleQueryWithBody = async (url: string, body : any): Promise<ArticlesCollection | { articles : [], count : number}> => {
    try{
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            next: {
                revalidate: CACHE_ONE_HOUR
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

export const getRecentArticles = async (page : number): Promise<ArticlesCollection | undefined> => {
    return executeArticleQuery(`${API_URL}/articles?page=${page}&take=${POST_PER_PAGE}`);
}

export const getUnmarkedRecentArticles = async (limit : number): Promise<ArticlesCollection | undefined> => {
    return executeArticleQuery(`${API_URL}/articles?featured=false&editorschoice=false&limit=${limit}`);
}

export const getFeatured = async (limit : number): Promise<ArticlesCollection> => {
    return executeArticleQuery(`${API_URL}/articles?featured=true&limit=${limit}`)
}

export const getFeaturedAndExclude = async (limit : number, exclude : number): Promise<ArticlesCollection> => {
    return executeArticleQuery(`${API_URL}/articles?featured=true&limit=${limit}&exclude=${exclude}`)
}

export const getSimilarArticles = async (slug : string): Promise<ArticlesCollection> => {
    return executeArticleQuery(`${API_URL}/articles/${slug}/similar?take=2`)
}

export const getArticleByCategory = async(categorySlug : string, page : number) : Promise<ArticlesCollection> => {
    return executeArticleQuery(`${API_URL}/categories/${categorySlug}/articles?take=${POST_PER_PAGE}&page=${page}`)
}