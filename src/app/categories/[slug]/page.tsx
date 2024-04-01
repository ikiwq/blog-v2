import { POST_PER_PAGE } from "@/common/constants";
import { getArticleByCategory, getCategory } from "@/common/functions";
import ArticleCard from "@/components/article/articleCard/ArticleCard";
import PaginationControls from "@/components/paginationController/PaginationControls";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined },
  params: { slug: string }
}

export async function generateMetadata(props : Props){
  const page = props.searchParams['page'] ?? '1';
  const category = await getCategory(props?.params?.slug);

  return {
      title: `${category?.title} | Page ${page}`,
      description: category?.description,
      alternates: {
        canonical : `/categories/${category?.slug}?page=${page}`
      },
      openGraph: {
        title: `${category?.title} | Page ${page}`,
        description: category?.description,
      }
  }
}

const page = async (props: Props) => {
  const page = props.searchParams['page'] ?? '1';

  const start = (Number(page) - 1) * Number(POST_PER_PAGE);
  const end = start + Number(POST_PER_PAGE);

  const category = await getCategory(props?.params?.slug);
  if(category == null){
    return notFound();
  }

  const articlesCollection = await getArticleByCategory(category.slug, Number(page))

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex w-full justify-center relative mt-8 md:mt-0 pb-8">
        <div className="flex flex-col w-full max-w-3xl">
          <h1 className="text-xl font-bold text-red-600">{category?.title}</h1>
          <div className="grid grid-cols  gap-2">
            {
              articlesCollection?.articles?.map((article, index) => {
                return (
                  <ArticleCard key={"article-card-" + index} article={article} />
                )
              })
            }
          </div>
        </div>
      </div>
      {
        articlesCollection.articles ? (
          <PaginationControls
          hasNextPage={end < articlesCollection?.count}
          hasPrevPage={start > 0}
          totalElements={articlesCollection?.count}
          />
        ) : 
        (
          <div>
            <h1 className="text-center text-xl">
              <span>There are still no articles here. Go back to the </span>
              <span className="underline"><Link href={"/"}>homepage.</Link></span>
            </h1>
          </div>
        )
      }
    </div>
  )
}

export default page