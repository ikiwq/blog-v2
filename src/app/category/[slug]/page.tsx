import ArticleCard from "@/components/article/articleCard/ArticleCard"
import MiniArticleCard from "@/components/article/articleCard/miniArticleCard/MiniArticleCard"
import CategoryCard from "@/components/category/categoryCard/CategoryCard"

type Props = {}

const page = (props: Props) => {
  let posts = [1, 2, 3, 4, 5, 6, 7];
  let categories = ["Software Engineer", "Java Development", "Webflux", "Software Engineer", "Java Development", "Webflux"];
  categories.sort((a, b) => a.length - b.length);
  return (
    <div className='flex flex-col lg:flex-row gap-2 lg:gap-6 overflow-visible'>
      <div className='flex flex-col gap-2 w-full lg:w-8/12 overflow-hidden'>
        <div>
          <h1 className='text-lg font-bold text-red-600'>MOST RECENT IN MAMMT</h1>
          <div className='flex flex-col gap-10'>
            {
              posts.map((post, index) => {
                return (
                  <ArticleCard />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full lg:w-4/12 sticky top-0 lg:h-80 flex-shrink-0'>
        <div>
          <h1 className='text-lg font-bold text-red-600'>RELATED CATEGORIES</h1>
          <div className='flex flex-wrap gap-2 py-2'>
            {
              categories.map((category, index) => {
                return (
                  <CategoryCard categoryName={category} />
                )
              })
            }
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold text-red-600'>MOST POPULAR IN MAMMT</h1>
          <ul className='flex flex-col gap-2.5'>
            {
              categories.map((category, index) => {
                return (
                  <li>
                    <MiniArticleCard />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page