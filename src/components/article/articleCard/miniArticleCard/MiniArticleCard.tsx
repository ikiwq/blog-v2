import CategoryCard from "@/components/category/categoryCard/CategoryCard"
import Link from "next/link"

type Props = {}

const MiniArticleCard = (props: Props) => {
  return (
      <div className="flex gap-4 items-center">
        <Link href={"article/a"}>
          <div className="w-14 h-14 cursor-pointer min-w-fit">
            <img className="w-14 h-14 rounded-full object-cover" src="https://media.tenor.com/t3dLLNaI50oAAAAC/cat-cats.gif" />
          </div>
        </Link>
        
        <div className="flex flex-col gap-1">
          <Link href={"article/a"} className="group">
            <p className="text-sm text-neutral-500">22 Oct 2023</p>
            <h1 className="font-bold text-md group-hover:text-red-600 duration-200">Gesú impalato: si cercano responsabili</h1>
          </Link>
          <div className="flex gap-2">
            <CategoryCard categoryName="Java" />
            <CategoryCard categoryName="Java" />
            <CategoryCard categoryName="Java" />
          </div>
        </div>
      </div>
  )
}

export default MiniArticleCard