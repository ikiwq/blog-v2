import { getCategories, getFeatured, getUnmarkedRecentArticles } from '@/common/functions';
import ArticleCard from '@/components/article/articleCard/ArticleCard';
import MiniArticleCard from '@/components/article/articleCard/miniArticleCard/MiniArticleCard';
import CategoryCard from '@/components/category/categoryCard/CategoryCard';

export default async function Home() {
  let recentPosts = await getUnmarkedRecentArticles(15);

  let categoriesCollection = await getCategories();
  let featuredArticles = await getFeatured(5);

  return (
    <div className='flex flex-col lg:flex-row gap-3 lg:gap-20 overflow-visible'>
      <div className='flex flex-col gap-3 w-full lg:w-7/10 overflow-hidden'>
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold text-red-600'>MOST RECENT</h1>
          <div className='flex flex-col gap-5'>
            {
              recentPosts?.articles && recentPosts.articles.map((article, index) =>
                <ArticleCard key={"most-recent-" + index} article={article} />
              )
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full sticky top-0 lg:h-80 flex-shrink-0 lg:w-3/10'>
        {
          categoriesCollection && categoriesCollection?.count > 0 && (
            <div className='flex flex-col gap-1'>
              <h1 className='text-lg font-bold text-red-600'>POPULAR CATEGORIES</h1>
              <div className='flex flex-wrap gap-2 pb-2'>
                {
                  categoriesCollection.categories.map((category, index) => {
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
          featuredArticles && featuredArticles?.articles?.length > 0 && (
            <div className='flex flex-col'>
              <h1 className='text-lg font-bold text-red-600'>FEATURED</h1>
              <ul className='flex flex-col gap-3'>
                {
                  featuredArticles.articles.map((article, index) =>
                    <li key={"editors-choice-" + index}>
                      <MiniArticleCard article={article}/>
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