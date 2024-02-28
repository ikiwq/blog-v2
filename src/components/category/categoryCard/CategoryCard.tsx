import { CATEGORIES_PATH } from "@/common/constants"
import { Category } from "@prisma/client"
import Link from "next/link"

type Props = {
  category : Category
}

const CategoryCard = (props: Props) => {
  return (
    <Link href={CATEGORIES_PATH + props?.category?.slug}>
      <div className="relative rounded-md flex group duration-200" style={{backgroundColor: "rgb(30, 0, 0)"}}>
        <div className="px-2 py-2 hover:bg-red-400 duration-200 z-30 rounded-md hover:bg-opacity-20">
          <p className="text-sm text-white whitespace-nowrap">{props?.category?.title}</p>
        </div>
        <div className="absolute overflow-hidden w-full h-full bg-red-600 opacity-30 z-0 group-hover:bg-red-400 duration-200 top-0 left-0 rounded-md">
          <img className="w-full h-full object-cover" src={props?.category?.img || ""} />
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard