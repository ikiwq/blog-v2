import CategoryMaxiCard from "@/components/category/categoryMaxiCard/MaxiArticleCard"
import { Category } from "@prisma/client";
import { notFound } from "next/navigation";
import { API_URL } from "../constants";

type Props = {}

const getData = async () : Promise<Array<Category> | null> => {
  const res = await fetch(`${API_URL}/api/category/`, {
    cache: "no-store",
  });

  if(!res.ok){
    return null;
  }

  return res.json();
}

const page = async (props: Props) => {
  const data = await getData();
  if(data == null) return notFound();

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