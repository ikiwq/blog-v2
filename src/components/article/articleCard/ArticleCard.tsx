import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import { Article, Category } from "@prisma/client";
import moment from "moment";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

type Props = {
  article: Article;
  categories: Array<Category>;
}

const ArticleCard = (props: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <Link href={'/article/' + props?.article?.slug}>
        <div className="group flex flex-col ">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <h1 className="text-2xl font-bold whitespace-pre-line break-words group-hover:text-red-600 duration-200">
              {props?.article?.title}
            </h1>
          </div>
          <div className="flex gap-2 text-sm">
            <div className="flex items-center gap-1 text-red-600">
              <span><FaCalendarAlt className='text-md' /></span> <span>{moment(props?.article?.createdAt).format('MMM DD, YYYY')}</span>
            </div>
            <div className="border-r border-red-600 my-0.5"></div>
            <div className="flex items-center gap-1 text-red-600">
              <span><FaClock className='text-md' /></span> <span>{props?.article?.readingTime}</span>
            </div>
          </div>
          <div>
            <p className="w-full">
              {props?.article?.excerpt}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap gap-2">
            {
              props?.categories && props?.categories.map((category, index) => {
                return (
                  <CategoryCard key={"article-category-" + index} category={category} />
                )
              })
            }
          </div>
    </div>
  )
}

export default ArticleCard