import Link from "next/link"

type Props = {
    categoryName : string
}

const CategoryCard = (props: Props) => {
  return (
    <Link href={"/"}>
        <div className="bg-red-600 px-2 py-1 rounded-full hover:bg-red-400 duration-200">
            <p className="text-sm text-white whitespace-nowrap">{props.categoryName}</p>
        </div>
    </Link>
  )
}

export default CategoryCard