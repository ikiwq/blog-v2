import CategoryCard from "@/components/category/categoryCard/CategoryCard"
import { ArticleWithCategories } from "@/models/article.model"
import { Article, Category } from "@prisma/client"
import moment from "moment"
import Link from "next/link"

type Props = {
  article: Article,
  categories: Array<Category>
}

const MiniArticleCard = (props: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <Link href={`article/${props.article.slug}`}>
        <div className="w-14 h-14 cursor-pointer min-w-fit">
          <img className="w-14 h-14 rounded-full object-center object-cover" src={props.article.img || ""} />
        </div>
      </Link>

      <div className="flex flex-col gap-1">
        <Link href={`article/${props.article.slug}`} className="group">
          <p className="text-sm text-neutral-500">{moment(props?.article?.createdAt).format('MMM DD, YYYY')}</p>
          <h1 className="font-bold text-md group-hover:text-red-600 duration-200">{props.article.title}</h1>
        </Link>
      </div>
    </div>
  )
}

export default MiniArticleCard