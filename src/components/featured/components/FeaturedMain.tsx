
import { Article, Category } from "@prisma/client";
import moment from "moment";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";


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
        <div className="h-1/4 bg-neutral-200 dark:bg-neutral-900 px-2 flex flex-col py-2 w-full group justify-center">
          <div className="flex gap-2 text-sm">
            <div className="flex items-center gap-1 text-red-600">
              <span><FaCalendarAlt className='text-md' /></span> <span>{moment(props?.article?.createdAt).format('MMM DD, YYYY')}</span>
            </div>
            <div className="border-r border-red-600 my-0.5"></div>
            <div className="flex items-center gap-1 text-red-600">
              <span><FaClock className='text-md' /></span> <span>3 Min read</span>
            </div>
          </div>
          <h1 className="text-lg font-bold line-clamp-2 break-words text-ellipsis group-hover:duration-200 group-hover:text-red-600 w-full duration-200">
            {props.article.title}
          </h1>
        </div>
      </div>
    </Link >
  )
}

export default FeaturedMain