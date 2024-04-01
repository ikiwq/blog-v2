import { getCategories } from "@/common/functions";
import CategoryMaxiCard from "@/components/category/categoryMaxiCard/MaxiArticleCard";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {}

export const metadata : Metadata = {
  title: "Latest articles",
  description: "All the categories of the Ikiwq Blog",
  openGraph: {
    title: "Latest articles",
    description: "All the categories of the Ikiwq Blog",
  }
}

const page = async (props: Props) => {
  const data = await getCategories();

  if(!data) return notFound();

  return (
    <div className="flex w-full justify-center relative mt-8 md:mt-0">
      <div className="flex flex-col w-full ">
        <h1 className="text-xl font-bold text-red-600">CATEGORIES </h1>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-2">
          {
            data && data.categories.map((category, index) => (
              <CategoryMaxiCard key={"category-maxi-card-" + index} category={category}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default page