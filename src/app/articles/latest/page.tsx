import { API_URL, POST_PER_PAGE } from "@/common/constants"
import { executeArticleQuery, getRecentArticles } from "@/common/functions"
import ArticleCard from "@/components/article/articleCard/ArticleCard"
import PaginationControls from "@/components/paginationController/PaginationControls"
import { Metadata } from "next"
import Head from "next/head"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata : Metadata = {
  title: "Latest articles",
  description: "Latest articles from the Ikiwq Blog."
}

const page = async (props: Props) => {
  const page = props.searchParams['page'] ?? '1';
  const articles = await getRecentArticles(Number(page));

  const start = (Number(page) - 1) * Number(POST_PER_PAGE);
  const end = start + Number(POST_PER_PAGE);

  return (
    <div className="flex w-full justify-center relative mt-8 md:mt-0 min-h-screen">
      <div className="flex flex-col w-full max-w-3xl">
        <h1 className="text-xl font-bold text-red-600">LATEST</h1>
        <div className="grid grid-cols gap-5 pb-6">
          {
            articles && articles.articles.map((article, index) => {
              return (
                <ArticleCard key={"article-card-" + index} article={article} />
              )
            })
          }
        </div>
        <PaginationControls
          hasNextPage={end < articles?.count!}
          hasPrevPage={start > 0}
          totalElements={articles?.count!}
        />
      </div>
    </div>
  )
}

export default page