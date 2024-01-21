import ArticleCard from '@/components/article/articleCard/ArticleCard';
import MiniArticleCard from '@/components/article/articleCard/miniArticleCard/MiniArticleCard';
import CategoryCard from '@/components/category/categoryCard/CategoryCard';
import Featured from '@/components/featured/Featured';
import { getEditorsChoice, getFeatured, getPopularCategories, getUnmarkedRecentArticles } from './functions';



export default async function Home() {

  let recentPosts = await getUnmarkedRecentArticles(15);
  let categories = await getPopularCategories();
  let featuredArticles = await getFeatured(5);
  let editorsChoice = await getEditorsChoice();

  return (
    <div className='flex flex-col lg:flex-row gap-3 lg:gap-20 overflow-visible'>
      <div className='flex flex-col gap-3 w-full lg:w-7/10 overflow-hidden'>
        {
          featuredArticles.articles.length > 4 && (
            true && (
              <div className='flex flex-col gap-1 h-225 md:h-185 xl:h-115'>
                <p className='text-lg font-bold text-red-600'>FEATURED</p>
                <Featured articles={featuredArticles.articles} />
              </div>
            )
          )
        }
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold text-red-600'>MOST RECENT</h1>
          <div className='flex flex-col gap-5'>
            {
              recentPosts.articles.map((articleRes, index) =>
                <ArticleCard key={"most-recent-" + index} article={articleRes.article} categories={articleRes.categories} />
              )
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full sticky top-0 lg:h-80 flex-shrink-0 lg:w-3/10'>
        {
          categories?.length > 0 && (
            <div className='flex flex-col gap-1'>
              <h1 className='text-lg font-bold text-red-600'>POPULAR CATEGORIES</h1>
              <div className='flex flex-wrap gap-2 pb-2'>
                {
                  categories.map((category, index) => {
                    return (
                      <CategoryCard key={"popular-category-" + index} category={category} />
                    )
                  })
                }
              </div>
            </div>
          )
        }
        {
          editorsChoice?.articles?.length > 0 && (
            <div className='flex flex-col'>
              <h1 className='text-lg font-bold text-red-600'>EDITOR'S CHOICE</h1>
              <ul className='flex flex-col gap-3'>
                {
                  editorsChoice.articles.map((articleAndCategories, index) =>
                    <li key={"editors-choice-" + index}>
                      <MiniArticleCard article={articleAndCategories.article} categories={articleAndCategories.categories} />
                    </li>
                  )
                }
              </ul>
            </div>
          )
        }
      </div>
    </div>
  )
}