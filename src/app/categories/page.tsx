import CategoryMaxiCard from "@/components/category/categoryMaxiCard/MaxiArticleCard"
import { notFound } from "next/navigation";
import { getCategories } from "@/common/functions";
import { Metadata } from "next";

type Props = {}

export const metadata : Metadata = {
  title: "Latest articles",
  description: "All the categories inside the Ikiwq Blog",
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
            data.map((category, index) => (
              <CategoryMaxiCard key={"category-maxi-card-" + index} category={category}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default page