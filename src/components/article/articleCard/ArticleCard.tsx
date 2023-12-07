import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import Link from "next/link";
import { AiFillCalendar } from "react-icons/ai";

type Props = {}

const ArticleCard = (props: Props) => {
  let categories = ["Software Engineer", "Java Development", "Webflux"];

  return (
    <div className="flex flex-col gap-2">
      <Link href={"/article/a"}>
        <div className="group">
          <div className="flex flex-col md:flex-row justify-between items-start md:pb-2">
            <h1 className="text-2xl w-10/12 font-bold whitespace-pre-line break-words group-hover:text-red-600 duration-200">
              Gesú morto impiccato in croce: si cercano responsabili
            </h1>
            <div className="flex items-center gap-1 text-red-600"><span><AiFillCalendar className='text-xl' /></span><span></span>13/11/2023</div>
          </div>
          <div>
            <p className="w-11/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap gap-2">
        {
          categories.map((category, index) => {
            return (
              <CategoryCard categoryName={category} />
            )
          })
        }
      </div>
    </div>
  )
}

export default ArticleCard