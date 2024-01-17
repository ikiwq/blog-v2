import MaxiArticleCard from "@/components/article/articleCard/maxiArticleCard/MaxiArticleCard"
import CategoryMaxiCard from "@/components/category/categoryMaxiCard/MaxiArticleCard"
import { Category } from "@prisma/client";

type Props = {}

const getData = async () : Promise<Array<Category>> => {
  const res = await fetch(`http://localhost:3000/api/category/`, {
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed to fetch for categories");
  }

  return res.json();
}

const page = async (props: Props) => {
  const data = await getData();
  
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