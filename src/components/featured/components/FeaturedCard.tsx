import { Article, Category } from "@prisma/client"
import moment from "moment"
import Link from "next/link"
import { FaCalendarAlt } from "react-icons/fa"

type Props = {
  article : Article
  categories : Array<Category>
}

const FeaturedCard = (props: Props) => {
  return (
    <Link href={`article/${props.article.slug}`}>
      <div className="flex h-full">
        <div className="bg-neutral-200 dark:bg-neutral-900 px-2 flex flex-col py-1 w-full duration-200 group">
          <div className="flex flex-col items-start pb-2 h-full justify-center">
            <div className="flex items-center gap-0.5 text-red-600 text-sm"><span><FaCalendarAlt className='text-md' /></span><span></span>{moment(props?.article?.createdAt).format('MMM DD, YYYY')}</div>
            <h1 className="text-md lg:text-sm font-bold line-clamp-3 break-words text-ellipsis group-hover:duration-200 group-hover:text-red-600">
              {props.article.title}
            </h1>
          </div>
        </div>
        <img className="h-full aspect-square object-cover" src={props.article.img || ""} />
      </div>
    </Link>
  )
}

export default FeaturedCard