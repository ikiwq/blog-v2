
import { Article, Category } from "@prisma/client";
import moment from "moment";
import Link from "next/link"
import { FaCalendarAlt } from "react-icons/fa";


type Props = {
  article: Article,
  categories: Array<Category>
}

const FeaturedMain = (props: Props) => {
  return (
    <Link href={`article/${props.article.slug}`}>
      <div className="flex flex-col h-full overflow-hidden">
        <div className="h-3/4 w-full">
          <img className="h-full w-full object-cover" src={props.article.img || ""} />
        </div>
        <div className="h-1/4 bg-secondary px-2 flex flex-col py-2 w-full group duration-200">
          <div className="flex flex-col justify-center items-start pb-2 h-full">
            <div className="flex items-center gap-0.5 text-red-600 text-md"><span><FaCalendarAlt/></span><span></span>{moment(props?.article?.createdAt).format('MMM DD, YYYY')}</div>
            <h1 className="text-lg font-bold line-clamp-2 break-words text-ellipsis group-hover:duration-200 group-hover:text-red-600 w-full">
              {props.article.title}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedMain