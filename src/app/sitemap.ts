import { ARTICLES_PATH, CATEGORIES_PATH } from "@/common/constants"
import { getCategories, getRecentArticles } from "@/common/functions"

export default async function sitemap() {
    const BASE_URL = "https://ikiwq-blog.vercel.app"

    const articles = await getRecentArticles(10000)
    const articlesUrl = articles?.articles.map(a => {
        return {
            url: `${BASE_URL + ARTICLES_PATH + a.slug}`,
            lastModified: a.updated_at
        }
    })

    const categories = await getCategories()
    const categoriesUrl = categories?.map(c => {
        return {
            url: `${BASE_URL + CATEGORIES_PATH + c.slug}`,
            lastModified: c.updated_at
        }
    })

    return [
        {
            url: BASE_URL,
            lastModified: new Date()
        },
        {
            url: `${BASE_URL}/latest`,
            lastModified: new Date()
        },
        {
            url: `${BASE_URL + CATEGORIES_PATH}`,
            lastModified: new Date()
        },
        ...articlesUrl || [],
        ...categoriesUrl || []
    ]
}