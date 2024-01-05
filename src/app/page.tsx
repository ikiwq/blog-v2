import ArticleCard from '@/components/article/articleCard/ArticleCard';
import MiniArticleCard from '@/components/article/articleCard/miniArticleCard/MiniArticleCard';
import CategoryCard from '@/components/category/categoryCard/CategoryCard';
import Featured from '@/components/featured/Featured';
import { getEditorsChoice, getFeatured, getPopularCategories, getRecentArticles } from './functions';



export default async function Home() {

  let recentPosts = await getRecentArticles();
  let categories = (await getPopularCategories());
  let featuredArticles = (await getFeatured());
  let editorsChoice = await getEditorsChoice().then((articles) => { console.log(articles); return articles; });

  return (
    <div className='flex flex-col lg:flex-row gap-2 lg:gap-20 overflow-visible'>
      <div className='flex flex-col gap-2 w-full lg:w-7/10 overflow-hidden'>
        {
          featuredArticles.articles.length > 4 && (
            true && (
              <div className='flex flex-col gap-2 h-225 md:h-185 xl:h-115'>
                <h1 className='text-lg font-bold text-red-600'>FEATURED</h1>
                <Featured articles={featuredArticles.articles} />
              </div>
            )
          )
        }
        <div>
          <h1 className='text-lg font-bold text-red-600'>MOST RECENT</h1>
          <div className='flex flex-col gap-4'>
            {
              recentPosts.articles.map((articleRes, index) =>
                <ArticleCard article={articleRes.article} categories={articleRes.categories} />
              )
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full sticky top-0 lg:h-80 flex-shrink-0 lg:w-3/10'>
        <div>
          <h1 className='text-lg font-bold text-red-600'>POPULAR CATEGORIES</h1>
          <div className='flex flex-wrap gap-2 py-2'>
            {
              categories.map((category, index) => {
                return (
                  <CategoryCard category={category} />
                )
              })
            }
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold text-red-600'>EDITOR'S CHOICE</h1>
          <ul className='flex flex-col gap-2.5'>
            {
              editorsChoice.articles.map((articleAndCategories, index) =>
                <li>
                  <MiniArticleCard article={articleAndCategories.article} categories={articleAndCategories.categories} />
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}