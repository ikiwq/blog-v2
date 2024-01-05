import { Category } from "@prisma/client"
import Link from "next/link"

type Props = {
  category : Category
}

const CategoryCard = (props: Props) => {
  return (
    <Link href={"/"}>
      <div className="relative rounded-md flex group">
        <div className="px-2 py-2 hover:bg-red-400 duration-200 z-30 rounded-md hover:bg-opacity-20">
          <p className="text-sm text-white whitespace-nowrap">{props?.category?.title}</p>
        </div>
        <div className="absolute overflow-hidden w-full h-full bg-red-600 opacity-25 z-0 group-hover:bg-red-400 duration-200 top-0 left-0 rounded-md">
          <img className="w-full h-full object-cover opacity-70" src={props?.category?.img || ""} />
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard