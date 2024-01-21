import { API_URL, POST_PER_PAGE } from "@/app/constants";
import { executeArticleQuery, getArticleByCategory, getCategory } from "@/app/functions"
import ArticleCard from "@/components/article/articleCard/ArticleCard"
import PaginationControls from "@/components/paginationController/PaginationControls";
import { notFound } from "next/navigation";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined },
  params: { slug: string }
}

const getData = async (page: number, categorySlug : string) => {
  return executeArticleQuery(`${API_URL}/api/article?page=${page}&category=${categorySlug}`);
}


const page = async (props: Props) => {
  const page = props.searchParams['page'] ?? '1';

  const start = (Number(page) - 1) * Number(POST_PER_PAGE);
  const end = start + Number(POST_PER_PAGE);

  const category = await getCategory(props?.params?.slug);
  if(category == null){
    return notFound();
  }
  const articlesWithCategories = await getData(Number(page), category.slug);

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center relative mt-8 md:mt-0 pb-8 min-h-screen">
        <div className="flex flex-col w-full max-w-3xl">
          <h1 className="text-xl font-bold text-red-600">{category?.title}</h1>
          <div className="grid grid-cols  gap-2">
            {
              articlesWithCategories?.articles.map((article, index) => {
                return (
                  <ArticleCard key={"article-card-" + index} article={article.article} categories={article.categories} />
                )
              })
            }
          </div>
        </div>
      </div>
      <PaginationControls
          hasNextPage={end < articlesWithCategories?.count}
          hasPrevPage={start > 0}
          totalElements={articlesWithCategories?.count}
        />
    </div>
  )
}

export default page