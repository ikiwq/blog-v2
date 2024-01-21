import ArticleCard from "@/components/article/articleCard/ArticleCard"
import { executeArticleQuery } from "../../common/functions"
import { API_URL, POST_PER_PAGE } from "../../common/constants"
import PaginationControls from "@/components/paginationController/PaginationControls"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const getData = async (page: number) => {
  return executeArticleQuery(`${API_URL}/api/article?page=${page}`);
}

const page = async (props: Props) => {
  const page = props.searchParams['page'] ?? '1';
  const articlesWithCategories = await getData(Number(page));

  const start = (Number(page) - 1) * Number(POST_PER_PAGE);
  const end = start + Number(POST_PER_PAGE);

  return (
    <div className="flex w-full justify-center relative mt-8 md:mt-0 min-h-screen">
      <div className="flex flex-col w-full max-w-3xl">
        <h1 className="text-xl font-bold text-red-600">LATEST</h1>
        <div className="grid grid-cols gap-5 pb-6">
          {
            articlesWithCategories && articlesWithCategories.articles.map((article, index) => {
              return (
                <ArticleCard key={"article-card-" + index} article={article.article} categories={article.categories} />
              )
            })
          }
        </div>
        <PaginationControls
          hasNextPage={end < articlesWithCategories?.count}
          hasPrevPage={start > 0}
          totalElements={articlesWithCategories?.count}
        />
      </div>
    </div>
  )
}

export default page